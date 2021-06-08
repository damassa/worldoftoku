const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { roles } = require('../roles');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(normalPassword, hashedPassword) {
    return await bcrypt.compare(normalPassword, hashedPassword);
}

exports.grantAccess = function(action, resource) {
    return async (req, res, next) => {
        try {
            const permission = roles.can(req.user.role)[action](resource);
            if(!permission.granted) {
                return res.status(401).json({
                    error: 'Você não tem permissão suficiente.'
                });
            }
            next();
        } catch(err) {
            next(err);
        }
    }
}

exports.allowIfLoggedIn = async (req, res, next) => {
    try {
        const user = res.locals.loggedInUser;
        if(!user) {
            return res.status(401).json({
                error: 'Você precisa logar para ter acesso.'
            });
        }
        req.user = user;
        next();
    } catch(err) {
        next(err);
    }
}

exports.register = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = new User({ username, email, password: hashedPassword, role: role || "user" });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        user.token = token;
        await user.save();
        res.json({
            data: user,
            message: "Registrado com sucesso!"
        })
    } catch(err) {
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if(!user) return next(new Error('Usuário inexistente.'));

        const validPassword = await validatePassword(password, user.password);

        if(!validPassword) return next(new Error('Senha incorreta.'));
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        await User.findByIdAndUpdate(user._id, { token });
        res.status(200).json({
            data: { username: user.username, role: user.role },
            token
        });
    } catch(err) {
        next(err);
    }
}

exports.list = async (req, res) => {
    const user = await User.find({}).sort('username');
    return res.status(200).json({
        data: user
    });
}

exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if(!user) return next(new Error('Usuário não existe.'));
        res.status(200).json(user);
    } catch(err) {
        next(err);
    }
}

exports.update = async (req, res, next) => {
    try {
        const { role } = req.body;
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, role);
        const user = await User.findById(userId);
        res.status(200).json({
            data: user,
            message: 'Usuário atualizado.'
        });
    } catch (err) {
        next(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
            data: null,
            message: 'Usuário excluído.'
        });
    } catch(err) {
        next(err);
    }
}
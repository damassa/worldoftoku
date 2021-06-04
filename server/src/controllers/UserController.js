const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passwordFunctions = require('../utils/password');
const { roles } = require('../roles');

module.exports = {
    async list(req, res) {
        const user = await User.find({}).sort('username');
        return res.status(200).json(user);
    },

    async getUser(req, res, next) {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId);

            if(!user) {
                return next(new Error('Usuário não existe.'));
            } else {
                res.status(200).json(user);
            }
        } catch(err) {
            next(err);
        }
    },

    async updateUser(req, res, next) {
        try {
            const update = req.body;
            const userId = req.params.userId;
            await User.findByIdAndUpdate(userId, update);
            const user = await User.findById(userId);
            res.status(200).json({
                data: user,
                message: 'Usuário atualizado.'
            });
        } catch (err) {
            next(err);
        }
    },

    async register(req, res, next) {
        try {
            const {
                username,
                email,
                password,
                role
            } = req.body;
            const hashedPassword = await passwordFunctions.hashPassword(password);
            const user = new User({ username, email, password: hashedPassword, role: role || 'user' });
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });
            user.token = token;
            await user.save();
            res.json({
                data: user,
                token
            })
        } catch(err) {
            next(err);
        }
    },

    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });

            if(!user) return next(new Error('Usuário inexistente.'));

            const validPassword = await passwordFunctions.validatePassword(password, user.password);

            if(!validPassword) return next(new Error('Senha incorreta.'));
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });
            await User.findByIdAndUpdate(user._id, { token });
            res.status(200).json({
                data: { username: user.username, role: user.role },
            });
        } catch(err) {
            next(err);
        }
    },

    async delete(req, res, next) {
        try {
            const userId = req.params.userId;
            await User.findByIdAndDelete(userId);
            res.status(200).json({
                data: null,
                message: 'Usuário excluído'
            });
        } catch(err) {
            next(err);
        }
    },
}
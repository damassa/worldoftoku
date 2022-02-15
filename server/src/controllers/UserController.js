const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const sender = require('../helpers/nodemailer');

require('dotenv').config();

const { roles } = require('../roles');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(normalPassword, hashedPassword) {
  return await bcrypt.compare(normalPassword, hashedPassword);
}

exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: 'Você não tem permissão suficiente.',
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

exports.allowIfLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({
        error: 'Você precisa logar para ter acesso.',
      });
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(500).json({
          error: 'Falha ao autenticar token.',
        });
      }
      const user = await User.findById(decoded.userId);
      if (!user) return next(new Error('Usuário não existe.'));
      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};

exports.isLogged = async (req, res) => {
  const { id, name, email } = req.user;
  res.json({
    id,
    name,
    email,
  });
};

exports.setResetPasswordToken = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json('Usuario inexistente.');

  const token = uuidv4();
  user.resetPasswordToken = token;
  user.save();

  sender({
    from: process.env.MAILER_EMAIL,
    to: user.email,
    subject: 'Troca de senha',
    text: 'http://localhost:3000/resetPassword/' + token,
  })
    .then((data) => {
      console.log(data);
      res.json({ message: 'E-mail enviado com sucesso' });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'Erro no envio do e-mail' });
    });
};

exports.resetPassword = async (req, res) => {
  const { token, password, confirmPassword } = req.body;
  const user = await User.findOne({ resetPasswordToken: token });

  if (!user) return res.status(401).json('Token inválido.');

  if (password !== confirmPassword) {
    return res.status(400).json('Senhas diferentes.');
  }

  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;
  user.resetPasswordToken = null;

  await user.save();
  return res.status(200).json('Senha alterada com sucesso!');
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = new User({ name, email, password: hashedPassword, role });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1y',
    });
    user.token = token;
    await user.save();
    res.json({
      data: user,
      message: 'Registrado com sucesso!',
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return next(new Error('Usuário inexistente.'));

    const validPassword = await validatePassword(password, user.password);

    if (!validPassword) return next(new Error('Senha incorreta.'));
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        favorites: user.favorites,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.json({ auth: false, token: null });
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res) => {
  const user = await User.find({}).sort('name');
  return res.status(200).json({
    data: user,
  });
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) return new Error('Usuário não existe.');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.listFavorites = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  const serie = await User.find().populate('series');
  return res.json(serie);
};

exports.update = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      newPassword,
      repeatPassword,
    } = req.body.user;

    const userId = req.params.userId;
    console.log(newPassword);
    const validPassword = await validatePassword(password, req.user.password);

    if (!validPassword) {
      return res.status(401).json('Senha incorreta.');
    }

    let hashedPassword;

    if (newPassword) {
      if (newPassword !== repeatPassword) {
        return res.status(400).json('As senhas são diferentes.');
      }
      hashedPassword = await hashPassword(newPassword);
    } else {
      hashedPassword = await hashPassword(password);
    }

    await User.findByIdAndUpdate(userId, {
      name,
      email,
      password: hashedPassword,
    });

    const user = await User.findById(userId);

    res.status(200).json({
      data: user,
      message: 'Usuário atualizado.',
    });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: 'Usuário excluído.',
    });
  } catch (err) {
    next(err);
  }
};

exports.toggleFavorites = async (req, res) => {
  const { serieId } = req.body;
  if (req.user.favorites.includes(serieId)) {
    req.user.favorites.pull(serieId);
  } else {
    req.user.favorites.push(serieId);
  }
  req.user.save();
  res.json({
    favorites: req.user.favorites,
    message: 'Série adicionada aos favoritos.',
  });
};

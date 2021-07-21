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

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = new User({ name, email, password: hashedPassword, role });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
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
      data: { email: user.email, role: user.role },
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

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) return next(new Error('Usuário não existe.'));
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const userId = req.params.userId;
    const hashedPassword = await hashPassword(password);
    await User.findByIdAndUpdate(userId, {
      name,
      email,
      password: hashedPassword,
      role,
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

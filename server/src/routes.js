const express = require('express');
const routes = express.Router();

const SerieController = require('../src/controllers/SerieController');
const CategoryController = require('../src/controllers/CategoryController');
const UserController = require('../src/controllers/UserController');

/* Series Router */
routes.get('/series', SerieController.list);
routes.get(
  '/series/favorites',
  UserController.allowIfLoggedIn,
  SerieController.listFavorites,
);
routes.post('/search', SerieController.search);
routes.get('/orderByYear', SerieController.orderByYear);
routes.post('/series/categories', SerieController.getSerieByCategory);
routes.post('/series', SerieController.store);
routes.get('/series/:id', SerieController.show);
routes.put('/series/:id', SerieController.update);
routes.delete('/series/:id', SerieController.delete);

/* Category Router */
routes.get('/categories', CategoryController.list);
routes.post('/categories', CategoryController.store);
routes.get('/categories/:id', CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

/* User Router */
routes.post('/users/forgotPassword', UserController.setResetPasswordToken);
routes.post('/users/resetPassword', UserController.resetPassword);
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.post('/logout', UserController.logout);
routes.post(
  '/users/favorites',
  UserController.allowIfLoggedIn,
  UserController.toggleFavorites,
);
routes.get(
  '/users/:userId',
  UserController.allowIfLoggedIn,
  UserController.getUser,
);
routes.get('/me', UserController.allowIfLoggedIn, UserController.isLogged);
routes.get(
  '/users',
  UserController.allowIfLoggedIn,
  UserController.grantAccess('readAny', 'profile'),
  UserController.list,
);
routes.put(
  '/users/:userId',
  UserController.allowIfLoggedIn,
  UserController.grantAccess('updateAny', 'profile'),
  UserController.update,
);
routes.delete(
  '/users/:userId',
  UserController.allowIfLoggedIn,
  UserController.grantAccess('deleteAny', 'profile'),
  UserController.delete,
);

module.exports = routes;

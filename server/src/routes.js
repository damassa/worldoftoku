const express = require('express');
const routes = express.Router();

const SerieController = require('../src/controllers/SerieController');
const CategoryController = require('../src/controllers/CategoryController');

routes.get('/series', SerieController.list);
routes.post('/series', SerieController.store);
routes.get('/series/:id' , SerieController.show);
routes.put('/series/:id', SerieController.update);
routes.delete('/series/:id', SerieController.delete);

routes.get('/categories', CategoryController.list);
routes.post('/categories', CategoryController.store);
routes.get('/categories/:id' , CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;
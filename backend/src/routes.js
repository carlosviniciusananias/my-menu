const express = require('express');
const routes = express.Router();

const menuController = require('./controllers/menuController');

routes.get('/menu', menuController.index);
routes.get('/menu', menuController.store);


module.exports = routes;
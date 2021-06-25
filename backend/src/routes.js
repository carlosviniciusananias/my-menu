const express = require('express');
const routes = express.Router();

const MenuController = require('./controllers/MenuController');

routes.get('/menu', MenuController.index);
routes.post('/menu', MenuController.store);

module.exports = routes;
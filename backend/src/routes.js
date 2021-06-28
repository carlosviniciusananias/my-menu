const express = require('express');
const routes = express.Router();

const MenuController = require('./controllers/MenuController');

routes.get('/menu', MenuController.list);
routes.post('/menu', MenuController.created);
// routes.put('/menu', MenuController.update);

module.exports = routes;
const mongoose = require('mongoose');

const Menu = require('../models/menu');

module.exports = {
    async index(req, res) {
        const menus = await Menu.find();

        return res.json(menus)
    }
}

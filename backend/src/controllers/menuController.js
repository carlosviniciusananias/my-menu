const mongoose = require('mongoose');

const Menu = require('../models/menu');

module.exports = {
    async index(req, res) {
        const menus = await Menu.find();

        return res.json(menus)
    },
    
    async store(req, res) {
        const menus = await Menu.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,    
        })

        return res.json(menu)
    }
}

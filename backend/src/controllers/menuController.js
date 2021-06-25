const mongoose = require('mongoose');
const Menu = require('../models/Menus');
 
module.exports = {
	//listagem
	async index(req, res) {
		const menus = await Menu.find();

		return res.json(menus);
	},

    
    async store(req, res){
        const menu = await Menu.create({
            name: req.body.name,
            type: req.body.type,
            age: req.body.age,
            value: req.body.value
        })
        return res.json(menu)
    }
}
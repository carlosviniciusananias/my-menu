const mongoose = require('mongoose');
const Menu = require('../models/Menus');
 
module.exports = {
	async list(req, res) {
		const menus = await Menu.find();

		return res.json(menus);
	},
    
    async created(req, res){
        const menu = await Menu.create({
            name: req.body.name,
            ingredients: req.body.ingredients,
            description: req.body.description,
            sellingPrice: req.body.sellingPrice,
            bestPrice: req.body.bestPrice,
        })

        return res.json(menu)
    },
}
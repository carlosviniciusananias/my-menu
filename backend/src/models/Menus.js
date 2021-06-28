const mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	name: String,
	ingredients: String,
	description: String,
	sellingPrice: String,
	bestPrice: String
});
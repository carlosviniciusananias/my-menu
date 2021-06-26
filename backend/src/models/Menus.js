const mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	name: String,
	type: String,
	description: String,
	sellingPrice: Number,
	bestPrice: Number
});
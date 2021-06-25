const mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	name: String,
	type: String,
	age: String,
	value: String
});
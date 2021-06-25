const mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
    "name": String,
    "image": String,
    "description": String,
    "price": Number,
})
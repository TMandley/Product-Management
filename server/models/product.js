const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    price: {type: Number, required: true},
    image: {type: String}
});
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    stock: Number,
    image: String,
    description: String,
    catalog: String
});

module.exports = mongoose.model('Product', ProductSchema);
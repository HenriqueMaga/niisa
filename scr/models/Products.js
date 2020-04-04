const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    valorMensal: {
        type: Number,
        require: true,
    },
    valorSemestral: {
        type: Number,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
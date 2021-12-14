const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    idProduct: {
        type: String,
        unique: true,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    stock_Min: {
        type: Number,
        default: 5
    },
    typeProduct: {
        type: String,
        require: true,
        enum: ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO']
    },
    dateExpired: {
        type: Date,
    }
});

module.exports = model('product', ProductSchema);
const { Schema, model } = require('mongoose');

const DetailSchema = new Schema({
    cant: {
        type: Number,
        require: true
    },
    product :{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }
});

module.exports = model('product', DetailSchema);
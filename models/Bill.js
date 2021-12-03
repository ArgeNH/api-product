const { Schema, model } = require('mongoose');

const BillSchema = new Schema({
    dateBill : {
        type: Date,
        require: true
    },
    typePay: {
        type: Boolean,
        require: true
    }
});

module.exports = model('product', BillSchema);
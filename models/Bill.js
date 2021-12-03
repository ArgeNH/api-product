const { Schema, model } = require('mongoose');

const BillSchema = new Schema({
    dateBill : {
        type: Date,
        require: true
    },
    typePay: {
        type: Boolean,
        require: true
    },
    detail: {
        type: [Schema.Types.ObjectId]
    }
});

module.exports = model('product', BillSchema);
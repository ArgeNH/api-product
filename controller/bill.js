const Bill = require("../models/Bill");
const Detail = require("../models/Detail");
const Product = require("../models/Product");

const getBills = async (req, res) => {
    try {
        const bill = await Bill.find();
        return res.status(200).json({
            message: "Success",
            data: bill
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const getBill = async (req, res) => {
    try {
        const { id } = req.params;
        const bill = await Bill.findById({ _id: id });
        return res.status(200).json({
            message: "Success",
            bill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const newBill = async (req, res) => {
    try {
        const bill = new Bill(req.body);
        await bill.save();
        return res.status(200).json({
            message: "Success",
            bill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const updateBill = async (req, res) => {
    try {
        const { id } = req.params;
        const bill = req.body;
        const result = await Bill.findByIdAndUpdate(id, bill);
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const deleteBill = async (req, res) => {
    try {   
        const { id } = req.params;
        const result = await Bill.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const newBuy = async (req, res) => {
    try {
        const { id } = req.params;
        const { cant } = req.body;
        const product = await Product.findById({ _id: id });
        let newStock = product.stock - cant;
        const bill = await Bill.findOne({ typePay: true });
        const newDetail = new Detail({
            cant: cant,
            product: product._id
        });
        await newDetail.save();
        await product.updateOne({ stock: newStock });
        await bill.updateOne({ detail: bill.detail.concat(newDetail._id) });
        return res.status(200).json({
            message: "Success",
            newDetail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const calcTotal = async (req, res) => {
    try {
        const { id } = req.params;
        const bill = await Bill.findById({ _id: id });
        let total = 0;
        for (let i = 0; i < bill.detail.length; i++) {
            const detail = await Detail.findById({ _id: bill.detail[i] });
            const product = await Product.findById({ _id: detail.product });
            total += detail.cant * product.value;
        }
        return res.status(200).json({
            message: "Success",
            total
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

module.exports = {
    getBills,
    getBill,
    newBill,
    updateBill,
    deleteBill,
    calcTotal,
    newBuy
}
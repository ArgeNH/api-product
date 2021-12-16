const Detail = require("../models/Detail");
const Product = require("../models/Product");

const getDetails = async (req, res) => {
    try {
        const details = await Detail.find();
        return res.status(200).json({
            message: "Success",
            details
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Detail.findById({ _id: id });
        return res.status(200).json({
            message: "Success",
            detail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const newDetail = async (req, res) => {
    try {

        const detail = new Detail(req.body);
        await detail.save();
        return res.status(200).json({
            message: "Success",
            detail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const updateDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Detail.findByIdAndUpdate({ _id: id });
        return res.status(200).json({
            message: "Success",
            detail
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

const deleteDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Detail.findByIdAndDelete(id);
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

const calcularSubTotal = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Detail.findById({ _id: id });
        const product = await Product.findById({ _id: detail.product });
        const subTotal = product.value * detail.cant;
        return res.status(200).json({
            message: "Success",
            product: product.description,
            value: product.value,
            cant: detail.cant,
            subTotal
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

module.exports = {
    getDetails,
    getDetail,
    newDetail,
    updateDetail,
    deleteDetail,
    calcularSubTotal
}
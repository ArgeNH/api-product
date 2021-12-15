const Product = require('../models/Product');

const getProducts = async (req, res) => {
    //res.send({ product: "Productos" });
    try {
        const product = await Product.find();
        return res.status(200).json({
            message: "Success",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            message: "Success",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const newProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(200).json({
            message: "Success",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = await Product.findByIdAndUpdate(id, product);
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

};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Success",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const isExpired = async (req, res) => {
    
};

const calcIva = async (req, res) => {

};

module.exports = {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    deleteProduct
}
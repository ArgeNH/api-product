const Product = require('../models/Product');

const getProducts = async (req, res) => {
    res.send({ product: "Productos" });
};

const getProduct = async (req, res) => {

};

const newProduct = async (req, res) => {

};

const updateProduct = async (req, res) => {

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

module.exports = {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    deleteProduct
}
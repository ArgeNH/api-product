const { Router } = require('express');
const {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    deleteProduct } = require('../controller/product');
const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', newProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
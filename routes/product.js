const { Router } = require('express');
const { getProducts } = require('../controller/product');
const router = Router();

router.get('/', getProducts);

module.exports = router;
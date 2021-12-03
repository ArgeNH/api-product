const { Router } = require('express');
const {
    getBills,
    getBill,
    newBill,
    updateBill,
    deleteBill } = require('../controller/bill');
const router = Router();

router.get('/', getBills); //Obtener todos los productos
router.get('/:id', getBill); //Obtener un solo producto
router.post('/', newBill); //Nuevo producto
router.put('/:id', updateBill); //Actualizar el producto
router.delete('/:id', deleteBill); //Eliminar el producto

module.exports = router;
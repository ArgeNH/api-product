const { Router } = require('express');
const {
    getBills,
    getBill,
    newBill,
    updateBill,
    deleteBill,
    calcTotal,
    newBuy } = require('../controller/bill');
const router = Router();

router.get('/', getBills); //Obtener todas las facturas
router.get('/:id', getBill); //Obtener una sola factura
router.post('/', newBill); //Nueva factura
router.put('/:id', updateBill); //Actualizar la factura
router.delete('/:id', deleteBill); //Eliminar la factura
router.get('/total/:id', calcTotal); //Calcular el total de la factura
router.post('/buy/:id', newBuy); //Nuevo compra

module.exports = router;
const { Router } = require('express');
const { 
    getDetails,
    getDetail,
    newDetail,
    deleteDetail
 } = require('../controller/detail');
const router = Router();

router.get('/detail', getDetails); //Obtener todos las facturas
router.get('/detail/:id', getDetail); //Obtener una factura
router.post('/detail/new', newDetail); //Nuevo factura
router.delete('/detail/:id', deleteDetail); //Eliminar factura

module.exports = router;
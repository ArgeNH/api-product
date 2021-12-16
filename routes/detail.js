const { Router } = require('express');
const {
    getDetails,
    getDetail,
    newDetail,
    updateDetail,
    deleteDetail,
    calcularSubTotal } = require('../controller/detail');
const router = Router();

router.get('/', getDetails); //Obtener todos las detalles
router.get('/:id', getDetail); //Obtener una detalle
router.post('/new', newDetail); //Nuevo detalle
router.put('/:id', updateDetail); //Actualizar detalle
router.delete('/:id', deleteDetail); //Eliminar detalle
router.get('/subtotal/:id', calcularSubTotal); //Calcular el subtotal del detalle

module.exports = router;
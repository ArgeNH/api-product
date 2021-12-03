const { Router } = require('express');
const { getBills } = require('../controller/bill');
const router = Router();

router.get('/', getBills);

module.exports = router;
const { Router } = require('express');
const { getDetails } = require('../controller/detail');
const router = Router();

router.get('/', getDetails);

module.exports = router;
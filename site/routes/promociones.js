var express = require('express');
var router = express.Router();
const promocionesController = require('../controllers/promocionesController')

/* GET promociones page. */
router.get('/', promocionesController.principal);

module.exports = router;

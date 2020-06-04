var express = require('express');
var router = express.Router();
const formularioCargaController = require('../controllers/formularioCargaController')

/* GET home page. */
router.get('/', formularioCargaController.principal);

module.exports = router;

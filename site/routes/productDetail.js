var express = require('express');
var router = express.Router();
const productDetailController = require("../controllers/productDetailController");

/* GET DETALLE CLIENTE */
router.get('/:id', productDetailController.detail);

module.exports = router;

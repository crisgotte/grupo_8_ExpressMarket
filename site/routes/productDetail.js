var express = require('express');
var router = express.Router();
const productDetailController = require("../controllers/productDetailController");

/* GET home page. */
router.get('/', productDetailController.principal);

module.exports = router;

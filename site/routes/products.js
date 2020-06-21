var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController");

/* GET home page. */
router.get('/', productsController.principal);

module.exports = router;

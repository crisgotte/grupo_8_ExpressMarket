var express = require('express');
var router = express.Router();
const listadodeproductosController = require("../controllers/listadodeproductosController");

/* GET home page. */
router.get('/', listadodeproductosController.principal);

module.exports = router;

var express = require('express');
var router = express.Router();
var productosController = require("../controllers/productosController");

// Creación

router.get("/crear", productosController.crear)

//router.post("/crear", productosController.store)

module.exports = router;

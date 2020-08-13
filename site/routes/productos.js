var express = require('express');
var router = express.Router();
var productosController = require("../controllers/productosController");

// Creación

router.get("/crear", productosController.crear);
// Falta metodo post



// Lectura
router.get("/", productosController.listado);


// Edición
router.get("/editar/:id", productosController.editar);
router.post("/editar/:id", productosController.actualizar);


// Eliminar
router.post("/borrar/:id", productosController.borrar);



module.exports = router;

var express = require('express');
//let fs= require("fs");
var router = express.Router();
var productosController = require("../Controllers/productosController");
var multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,"./public/images/products");

    },
    filename: function(req, file, cb){
               cb(null, Date.now() + path.extname(file.originalname));

    } 

});
const upload = multer({ storage: storage})

// Creación

//router.get("/crear", productosController.crear);
// Falta metodo post



// Lectura
router.get("/", productosController.listado);


// Edición
router.get("/editar/:id", productosController.editar);
router.post("/editar/:id",productosController.actualizar);


// Eliminar
router.post("/borrar/:id", productosController.borrar);



module.exports = router;

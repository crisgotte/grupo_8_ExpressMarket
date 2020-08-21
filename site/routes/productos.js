var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require("path");

var productosController = require("../controllers/productosController");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/products");

    },
    filename: (req, file, cb) => {
               cb(null, Date.now() + path.extname(file.originalname));

    } 

});
const upload = multer({ storage: storage})
// Creación
router.get("/crear/principal",productosController.principal);
router.get("/crear", productosController.crear);
router.post("/crear", upload.any(), productosController.guardado);

// Listado
router.get("/", productosController.listado);


// Edición
router.get("/editar/:id", productosController.editar);
router.post("/editar/:id",upload.any(), productosController.actualizar);

//detalle
router.get("/:id", productosController.detalle);

// Eliminar
router.post("/borrar/:id", productosController.borrar);

//Buscar
router.post('/buscar', productosController.buscar);



module.exports = router;

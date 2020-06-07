var express = require('express');
var router = express.Router();
const formularioCargaController = require('../controllers/formularioCargaController')

/* GET home page. */
router.get('/', formularioCargaController.principal);

router.post("/", (req, res) =>{
    console.log(req.body.nombre);
    res.send("recibido");
});
module.exports = router;

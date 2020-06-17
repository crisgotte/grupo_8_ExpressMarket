var express = require('express');
var router = express.Router();
var multer = require('multer');

const formularioCargaController = require('../controllers/formularioCargaController')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/products");

    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " ");

    } 

});
const upload = multer({ storage: storage})

/* GET home page. */
router.get("/", formularioCargaController.principal);
//router.post("/Create", upload.any(), formularioCargaController.store);

router.post("/site/views/formularioDeCarga.ejs", (req, res) =>{
    console.log(req.body);
    res.send("recibido");
});
module.exports = router;

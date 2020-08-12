var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require("path");

const formularioCargaController = require('../controllers/formularioCargaController')

//Creacion de nuevos productos

router.get("/crear", formularioCargaController.crear);

module.exports = router;





/*const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/products");

    },
    filename: (req, file, cb) => {
               cb(null, Date.now() + path.extname(file.originalname));

    } 

});
const upload = multer({ storage: storage})
*/
/* GET home page. */
/*router.get("/", formularioCargaController.principal);
router.post("/create", upload.any(), formularioCargaController.store);


module.exports = router;
*/

var express = require('express');
var router = express.Router();
var multer = require('multer');
let { check, validationResult, body } = require("express-validator");
const registerController = require('../controllers/registerController');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/users");

    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " ");

    } 

});
const upload = multer({storage: storage});

/* GET home page. */
router.get('/', registerController.principal);
router.post("/create",[
    //check("nombre").isLength({min:3}),
    //check("apellido").isLength({min:3}),
    //check("contraseña").isLength({min:8}),
    ckeck("email").isEmail(),
    check("user").isLength()
], registerController.store);



module.exports = router;

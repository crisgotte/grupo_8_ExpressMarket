var express = require('express');
var router = express.Router();
const fs = require('fs');
var multer = require('multer');
const path = require("path");
let { check, validationResult, body } = require("express-validator");
const registerController = require('../controllers/registerController');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/images/users");

    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));

    } 

});
const upload = multer({storage: storage});

/* GET home page. */
router.get('/', registerController.principal);
router.post("/create", upload.any(),
[
    check("nombre").isLength({min:2}).withMessage("Su nombre debe tener 2 o más caracteres"),
    check("apellido").isLength({min:2}).withMessage("Su apellido debe tener 2 o más caracteres"),
    check("contrasena").isAlphanumeric().withMessage('La contraseña debe contener letras y números').isLength({min:8}).withMessage("Su contraseña debe tener màs de 8 caracteres"),
    //Validar password y repeatPassword
  body('repeatContrasena').custom((value, { req }) => {
    console.log(value)
    if (value !== req.body.contrasena) {
      throw new Error('Las contraseñas ingresadas no coinciden');
    }
    return true;
  }),
    check("email").isEmail().withMessage("Email inválido"),
     //Chequear usuario existente
  body('email').custom(value => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == value) {
        return false;
      }
    }
    return true;
  }).withMessage('Email ya existente'),
    check("usuario").isLength().withMessage("El usuario debe de estar completo")
],
 registerController.store);



module.exports = router;

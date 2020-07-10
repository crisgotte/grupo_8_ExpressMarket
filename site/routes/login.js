var express = require('express');
var router = express.Router();
let { check, validationResult, body } = require("express-validator");
const loginController = require("../controllers/loginController");
let guestMiddleware = require("../middleware/guestMiddleware");


/* GET home page. */
router.get('/', loginController.principal);
router.post("/login",
[
    check("email").isEmail().withMessage("Email inválido"),
    check("contrasena").isLength({min:8}).withMessage("la contraseña debe tener al menos 8 caracteres")
    
], loginController.processLogin);

 /*router.get("/check", function(req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("No estas logueado");
} else{
    res.send("ruta de incio")
};*/ 
 
module.exports = router;
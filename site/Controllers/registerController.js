let fs= require("fs");
let { check, validationResult, body } = require("express-validator");
let path= require("path");
const bcrypt = require('bcrypt');

const usersFilePath = path.dirname(__dirname) + '/data/users.json';
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const registerController = {
    principal: (req,res) => {
        res.render('register');
    },
    
    store: (req,res,next) => {
        // Do the magic
        console.log(req.body)
        let errors = validationResult(req)
        if(errors.isEmpty()) {
            let nuevoUsers={}
            if(users==""){
                nuevoUsers.id=1
            } else { 
                let ultimoUsers=users[users.length-1]
                nuevoUsers.id=ultimoUsers.id+1
            }
            
            nuevoUsers.nombre=req.body.nombre
            nuevoUsers.apellido=req.body.apellido
            nuevoUsers.email=req.body.email
            nuevoUsers.contrasena = bcrypt.hashSync(req.body.contrasena,10)
            nuevoUsers.usuario=req.body.usuario
            nuevoUsers.imagen = req.files[0].filename
            
            //res.send(nuevoUsers)
            users.push(nuevoUsers)
            
            let usersCargadosJSON = JSON.stringify(users)
            fs.writeFileSync(usersFilePath, usersCargadosJSON)
            res.redirect("/")
        }

        return res.render("register", {errors: errors.errors})

    } 
};  

 module.exports = registerController;

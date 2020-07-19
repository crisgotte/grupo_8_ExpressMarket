let fs= require("fs");
let { check, validationResult, body } = require("express-validator");
let path= require("path");
const bcrypt = require('bcrypt');

const usersFilePath = path.dirname(__dirname) + '/data/users.json';


const loginController = {
    principal: (req,res) => {
        res.render('login');
    },

    processLogin: function(req,res){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let usersJson = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
           
            let users;
            if(usersJson == ""){
                users = [];  
            } else{
                users = usersJson;
            } 
            
            for( let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    console.log(users)
                let contrabody = req.body.contrasena;
                
                    console.log(contrabody, users[i].contrasena);
                    if(bcrypt.compareSync(contrabody, users[i].contrasena)){
                    
                    let usuarioALoguearse = users[i];
                    req.session.usuarioLogueado = usuarioALoguearse;
                    break;
                    } 
                } 
            }


             if(usaurioALoguearse = undefined) {
                 return res.render ("login",{errors: [
                    {msg: "datos invalidos"}       
              ]});
             }
             
             res.render("index"); 
        } else {
            return res.render("login", {errors: errors.errors});
        }

    },
};

module.exports = loginController;
let fs= require("fs");
let path= require("path");
const usersFilePath = path.dirname(__dirname) + '/data/users.json';
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const registerController = {
    principal: (req,res) => {
        res.render('register');
    }
};




store: (req, res) => {
    // Do the magic
    let nuevoUsers={}
    if(users==""){
        nuevoUsers.id=1
    } else { 
    let ultimoUsers=Users[Users.length-1]
    nuevoUsers.id=ultimoUsers.id+1
    }
    
    nuevoUsers.nombre=req.body.nombre
    nuevoUsers.apellido=req.body.apellido
    nuevoUsers.email=req.body.email
    nuevoUsers.contraseña=req.body.contraseña
    nuevoUsers.contraseña2=req.body.contraseña2
    nuevoUsers.usuario=req.body.usuario
        
    //res.send(nuevoUsers)
    products.push(nuevoUsers)
  
    let UserCargadosJSON = JSON.stringify(Users)
    fs.writeFileSync(UsersFilePath, UsersCargadosJSON)
res.redirect("/")
    };

 module.exports = registerController;


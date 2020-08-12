let fs= require("fs");
let path= require("path");
const db = require("../database/models");

const formularioCargaController = {
    crear: function (req, res) {
        db.Product.findAll()
            .then(function(products){
                return res.render ("listadoProductos", {products:products});
            })


    }
}

module.exports = formularioCargaController
/*const productsFilePath = path.dirname(__dirname) + '/data/products.json';
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const formularioCargaController = {
    principal: (req,res) => {
        res.render('formularioDeCarga');
    
},

store: (req, res) => {
    // Do the magic
    let nuevoProducto={}
    if(products==""){
        nuevoProducto.id=1
    } else { 
    let ultimoProducto=products[products.length-1]
    nuevoProducto.id=ultimoProducto.id+1
    }
    
    nuevoProducto.nombre=req.body.nombre
    nuevoProducto.price=req.body.price
    nuevoProducto.mensaje=req.body.mensaje
    nuevoProducto.categoria=req.body.categoria
    nuevoProducto.imagen=req.files[0].filename
        
    //res.send(nuevoProducto)
    products.push(nuevoProducto)
  
    let productosModificadosJSON = JSON.stringify(products)
    fs.writeFileSync(productsFilePath, productosModificadosJSON)
res.redirect("/")
    },
        
};

module.exports = formularioCargaController;*/





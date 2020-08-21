const db = require("../database/models");
let path= require("path");
const fs = require('fs');


let productosController = {
    principal: function(req,res){
        res.render("productos")
    },  

    crear: function(req, res){
        db.Categoria.findAll()
        .then(function(categoria){
            res.render("formularioDeCarga",{categoria:categoria});
        })
        

   }, 

   guardado: function(req,res){
       db.Product.create({
           nombre: req.body.nombre,
           precio: req.body.precio,
           categoria_id: req.body.categoria,
           descripcion: req.body.descripcion,
           imagen: req.files[0].filename

       });
       
       res.redirect("/productos/");
   },

   listado: function(req, res){
        db.Product.findAll({
            include: ["categoria"]
         })
            .then(function(productos){
               res.render("listadoProductos", {productos:productos});

            })

    },

    editar: function(req, res){
       let pedidoProducto = db.Product.findByPk(req.params.id);

       let pedidoCategorias = db.Categoria.findAll();
       
        Promise.all([pedidoProducto, pedidoCategorias])
              .then(function([producto, categorias]) {
                    res.render("editarProducto", {producto:producto, categorias:categorias});

            })
    
    },

    actualizar: function(req, res){
        db.Product.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            //imagen: req.files[0].filename
 
        },{
            where: {
                id: req.params.id
            }
        });
        res.redirect("/productos/");

    },
    borrar: function(req,res){
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect("/productos/");
    },

    detalle: function(req, res){
        db.Product.findByPk(req.params.id,{
            include:[{association:"categoria"}] 
        })
            .then(function(producto){
                res.render("detalleproducto", {producto:producto});
            })
    },
    buscar: async (req, res) => {
        const searchedProducts = await db.Product.findAll({
            where: {
              name: {
                [db.Sequelize.Op.like]: '%' + req.query.keywords + '%'
              }
            }
         });

         res.render('listadoProductos', {
            products: searchedProducts
        });
	}

}



module.exports = productosController;

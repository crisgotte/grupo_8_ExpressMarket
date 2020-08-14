const db = require("../database/models");
const registerController = require("./registerController");

const productosController = {
    crear: function(req, res){
        db.Producto.findAll()
            .then(function(productos){
                return res.render("productos", {productos:productos});

            })

    },
    listado: function (req,res){
        db.Producto.findAll()
            .then(function(productos){
                return res.render("listadoProductos", {productos:productos});

            })

    },
    editar: function (req,res){
        db.Producto.findByPk(req.params.id)
            .then(function(productos){
                res.render("editarProductos", {productos:productos});

            })
    
    },
    actualizar: function(req,res){
        db.Producto.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen
        },{
            where: {
                id: req.params.id
            }
        });
        res.redirect("/productos/crear");

    },
    borrar: function(req,res){
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect("/productos/crear");
    }


}

module.exports = productosController;

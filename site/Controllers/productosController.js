const db = require("../database/models");

const productosController = {
    crear: function(req, res){
        db.Producto.findAll()
            .then(function(productos){
                res.render("productos", {productos:productos});

            })

    }
}

module.exports = productosController;

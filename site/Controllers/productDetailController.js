const db = require("../database/models");
let path= require("path");
const fs = require('fs');


let productDetailController = {

    detail: function(req, res){
        db.Product.findByPk(req.params.id,{
            include:[{association:"categoria"}] 
        })
            .then(function(producto){
                res.render("productDetail", {producto:producto});
            })
    }

}



module.exports = productDetailController;

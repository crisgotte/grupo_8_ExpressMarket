const fs = require('fs');
const path = require('path');
const db = require("../database/models");


const promocionesController = {
    promociones: (req,res) => {
        db.Product.findAll({
            include: ["categoria"]
         })
            .then(function(productos){
               res.render("promociones", {productos:productos});

            })

    }
};

module.exports = promocionesController;
const fs = require('fs');
const path = require('path');
const db = require("../database/models");


const productsController = {
    catalogo: (req,res) => {
        db.Product.findAll({
            include: ["categoria"]
         })
            .then(function(productos){
               res.render("products", {productos:productos});

            })

    }
      /*detail: (req, res) => {
          let categoria = req.params.categoria;
          let pdtoID = req.params.id;
          let productFind = null;
  
          if (categoria == 'almacen') {
              productFind = almacen.find(pdto => pdto.id == pdtoID);
          }
          
          /*if (categoria == 'visited') {
              productFind = pdtosVisited.find(pdto => pdto.id == pdtoID);
          }
  
          res.render('detail', {
              productFind,
              thousandGenerator: toThousand
          });
      },*/
  };
  


module.exports = productsController;
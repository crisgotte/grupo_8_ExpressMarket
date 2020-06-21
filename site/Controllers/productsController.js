const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const almacen = products.filter(almacen => almacen.category == 'almacen');

const productsController = {
    principal: (req,res) => {
        res.render('products', {
              almacen,
              
          });
      },
      detail: (req, res) => {
          let categoria = req.params.categoria;
          let pdtoID = req.params.id;
          let productFind = null;
  
          if (categoria == 'almacen') {
              productFind = almacen.find(pdto => pdto.id == pdtoID);
          }
          
          /*if (categoria == 'visited') {
              productFind = pdtosVisited.find(pdto => pdto.id == pdtoID);
          }
  */
          res.render('detail', {
              productFind,
              thousandGenerator: toThousand
          });
      },
  };
  


module.exports = productsController;
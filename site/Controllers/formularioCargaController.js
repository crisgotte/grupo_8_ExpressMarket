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
    nuevoProducto.imagen=req.body.imagen
    
    //res.send(nuevoProducto)
    products.push(nuevoProducto)

    let productosModificadosJSON = JSON.stringify(products)
    fs.writeFileSync(productsFilePath, productosModificadosJSON)

    },
        /*res.render("addProduct");/*


//create -Method to store//
/*store:(req,res,next)=>{
    req.body.price = Number(req.body.price);
    req.body.nombre = Number(req.body.nombre);

    let newProduct = {
        id: products [products.length -1]. id + 1,
        ...req.body,
        image: "default-image.png"
    };
    let finalProducts = [...products, newProduct];
    fs. writeFileSync(productsFilePath, JSON.stringify(finalProduct,null, " "));
    res.redirect("/");
    

 
}*/
};

module.exports = formularioCargaController;
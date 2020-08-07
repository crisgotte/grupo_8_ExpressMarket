module.exports = function(sequelize, dataTypes){
    let alias = "products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, 
        nombre:{
            type: dataTypes.STRING

        }, 
        precio:{
            type: dataTypes.FLOAT
        }, 

        categoria:{
            type: dataTypes.STRING

        }, 
        descripcion:{
            type: dataTypes.STRING

        }, 
        imagen:{
            type: dataTypes.STRING

        }, 
    } 
    let config = {
        tableName: "Products",
        timesTamps: false

    }
    let user = sequelize.define(alias,cols,config);
    Product.associate = function(models) {
        
        Product.hasMany(models.users,{ //de uno a muchos
            as: "products",
            foreignkey: "id"
        } )
    }

    return Products;
} 
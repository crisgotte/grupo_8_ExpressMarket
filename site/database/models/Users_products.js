module.exports = function(sequelize, dataTypes){
    let alias = "Users_products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, 
        
        Users_id:{
            type: dataTypes.FLOAT
        }, 
        products_id:{
            type:dataTypes.FLOAT
        },

    } 
    let config = {
        tableName: "Users_products",
        timestamps: false

    }
    let Users_products = sequelize.define(alias,cols,config);
  

    return Users_products;
} 
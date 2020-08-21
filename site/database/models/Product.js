module.exports = function(sequelize, dataTypes){
    let alias = "Product";

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
        descripcion:{
            type: dataTypes.STRING

        }, 
        imagen:{
            type: dataTypes.STRING

        }, 
        categoria_id:{
            type: dataTypes.INTEGER
        }  
    } 

    let config = {
        tableName: "products",
        timestamps: false

    }
    let Products = sequelize.define(alias,cols,config);
    
    Products.associate = function(models) {
        
       Products.belongsTo(models.Categoria,{ //de mucho a uno
            as: "categoria",
            foreignKey: "categoria_id"
        });

        Products.belongsToMany(models.User,{ //de muhco muhcos
            as: "users",
            through: "users_products", //como se llama la tabla intermedia
            foreignKey: "id", //aca no se si va el otherKey porque en la tabla no tiene
            otherKey: "users_id",
            timestamps: false
        });
    }

    return Products;
} 
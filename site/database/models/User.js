module.exports = function(sequelize, dataTypes){
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, 
        nombre:{
            type: dataTypes.STRING

        }, 
        apellido:{
            type: dataTypes.FLOAT
        }, 

        email:{
            type: dataTypes.STRING
 
        }, 
        contrasena:{
            type: dataTypes.STRING

        }, 
        imagenPerfil:{
            type: dataTypes.STRING

        }, 
    } 
    let config = {
        tableName: "users",
        timestamps: false

    }
    let User = sequelize.define(alias,cols,config);
    User.associate = function(models) {
        
        User.belongsToMany(models.Product,{ //de uno a muchos
            as: "Product",
            through: "Users_products", //como se llama la tabla intermedia
            foreignkey: "id", //aca no se si va el otherKey porque en la tabla no tiene
            otherKey: "products_id",
            timestamps: false
        });
    }

    return User;
} 
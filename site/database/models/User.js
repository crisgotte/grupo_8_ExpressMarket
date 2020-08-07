module.exports = function(sequelize, dataTypes){
    let alias = "users";

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
            type: dataTypes.STRING
        }, 
        email:{
            type: dataTypes.STRING

        }, 
        contrasena:{
            type: dataTypes.STRING

        }, 
        imagen:{
            type: dataTypes.STRING

        }, 
    } 
    let config = {
        tableName: "Users",
        timesTamps: false

    }
    let user = sequelize.define(alias,cols,config);

    User.associate = function(models) {
        User.hasMany(models.Products,{ //de uno a muchos
            as: "products",
            foreignkey: "id"
        } )
    }
    return User;
} 
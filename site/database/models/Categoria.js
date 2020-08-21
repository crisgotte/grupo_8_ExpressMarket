module.exports = function(sequelize, dataTypes){
    let alias = "Categoria";

    let cols = {
        id_categories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, 
        nombre:{
            type: dataTypes.STRING

        } 
        
    } 

    let config = {
        tableName: "categoria",
        timestamps: false

    }

    let Categoria = sequelize.define(alias,cols,config);

    Categoria.associate = function(models) {        
       Categoria.hasMany(models.Product, {     //de uno a muchos//va el nombre del Alias
            as: "Productos",
            foreignKey: "categoria_id"
        });
    } 

    return Categoria;
} 
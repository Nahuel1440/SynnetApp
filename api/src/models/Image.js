const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'image', 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
      },
      public_id:{
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      Image_LP: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      imageURL: {
        type: DataTypes.STRING,
      }
    }
  );
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartDetails.belongsTo(models.Cart, { 
         foreignKey: "CartId" 
      });
      CartDetails.hasMany(models.Books, {
         foreignKey: 'id',
      }); 
    }
  };
  CartDetails.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    CartId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartDetails',
  });
  return CartDetails;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: 'UserId' 
      });
      Cart.hasMany(models.CartDetails, { 
        foreignKey: 'cartId' });
    }
  };
  Cart.init({
    UserId: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Total: DataTypes.INTEGER,
    PurchaseDate: DataTypes.DATE,
    DeliveryDate: DataTypes.DATE,
    DeliveryAddress: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
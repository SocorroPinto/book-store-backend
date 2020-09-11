'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsToMany(models.Cart, {
        through: 'CartDetails',
        foreignKey: 'BookId',
        otherKey: 'CartId'
      });
    }
  };
  Books.init({
    Title: DataTypes.STRING,
    Author: DataTypes.STRING,
    PublicationYear: DataTypes.INTEGER,
    Cost: DataTypes.INTEGER,
    Description: DataTypes.TEXT,
    Summary: DataTypes.TEXT,
    Language: DataTypes.STRING,
    Img: DataTypes.STRING,
    Rating: DataTypes.INTEGER,
    Pages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
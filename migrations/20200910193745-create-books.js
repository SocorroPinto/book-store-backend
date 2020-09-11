'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PublicationYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      Summary: {
        type: Sequelize.TEXT
      },
      Language: {
        type: Sequelize.STRING
      },
      Img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Rating: {
        type: Sequelize.INTEGER
      },
      Pages: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
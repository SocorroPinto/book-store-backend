'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Gladys Cruz",
          username: "gladys",
          password: null,
          email: "gladys@cruz",
          administrator: true
        },
        {
          name: "Socorro Pinto",
          username: "soco",
          password: null,
          email: "socorro@pinto",
          administrator: true
        },
        {
          name: "Sergio Sarmiento",
          username: "sergio",
          password: null,
          email: "sergio@sarmiento",
          administrator: false
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

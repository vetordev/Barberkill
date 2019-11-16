'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'clients', //table
      'password',
      {
        type: Sequelize.STRING(12)
      }
    );
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'clients',
      'password'
    );
  }
};

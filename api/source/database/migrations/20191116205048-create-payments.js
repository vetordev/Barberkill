'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      form_of_payment: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      created_at: {
        type : Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {   
    return queryInterface.dropTable('payments');
  }
};
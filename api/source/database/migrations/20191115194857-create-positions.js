'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('positions', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    position: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    salary: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    created_at: {
      type : Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }

   });
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('positions');
  }
};

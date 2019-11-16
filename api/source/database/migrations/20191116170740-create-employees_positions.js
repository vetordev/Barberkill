'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_positions', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'employees', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      position_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'positions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employees_positions');
    
  }
};

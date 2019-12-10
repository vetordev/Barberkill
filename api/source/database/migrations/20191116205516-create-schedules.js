'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      horary: {
        type: Sequelize.STRING(5),
        allowNull: false
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clients', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'services', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'employees', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      observation: {
        type: Sequelize.TEXT,
        allowNull: true 
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
    return queryInterface.dropTable('schedules');
  }
};
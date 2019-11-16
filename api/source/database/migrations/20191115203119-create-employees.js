'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      telephone: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      cellphone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      cep_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'addresses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      num_address: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      comp_address: {
        type: Sequelize.STRING(100),
        allowNull: true
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
    return queryInterface.dropTable('employees');
  
  }
};

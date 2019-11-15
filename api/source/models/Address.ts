import { Model, Sequelize, DataTypes } from 'sequelize';
import sequelize = require('sequelize');

export class Address extends Model {
  static start(connection: Sequelize){
    this.init({
      street: DataTypes.STRING(100),
      city: DataTypes.STRING(78),
      state: DataTypes.STRING(2),
      neighborhood: DataTypes.STRING(45)
    },{
      sequelize: connection,
      modelName: 'Address'
    })
  }

  static associate(models: any){
    this.hasMany(models.Employee, {
      foreignKey: 'cep', as: 'fk_cep_address'
    })
  }
}
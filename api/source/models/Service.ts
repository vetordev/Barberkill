import { Model, DataTypes, Sequelize } from 'sequelize';

export class Service extends Model {
  static start(connection: Sequelize) {
    this.init({
      service: DataTypes.STRING(70),
      value: DataTypes.FLOAT
    },{
      sequelize: connection,
      modelName: "Service"
    });
  }
}
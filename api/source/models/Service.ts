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

  static associate(models: any){
    this.hasMany(models.Schedule, {
      foreignKey: 'service_id', as: 'schedules'
    });

    this.belongsTo(models.Position, { foreignKey: 'position_id', as: 'positions' });
  }
}
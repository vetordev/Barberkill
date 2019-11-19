import { Model, DataTypes, Sequelize } from 'sequelize';


export class Attendance extends Model {
  static start(connection: Sequelize){
    this.init({
      payment_id: DataTypes.INTEGER,
      schedule_id: DataTypes.INTEGER
    }, {
      sequelize: connection,
      modelName: 'Attendance'
    });
  }

  static associate(models: any){
    this.belongsTo(models.Schedule, { foreignKey: 'schedule_id', as: 'schedules' });
    this.belongsTo(models.Payment, { foreignKey: 'payment_id', as: 'payments' });
  }
}
import { Model, DataTypes, Sequelize } from 'sequelize';

export class Payment extends Model {
  static start(connection: Sequelize){
    this.init({
      form_of_payment: DataTypes.STRING(70)
    },{
      sequelize: connection,
      modelName: 'Payment'
    });
  }

  static associate(models: any){
    this.belongsToMany(models.Schedule, { foreignKey: 'payment_id', through: 'attendances', as: 'schedule_pay' });
  }
}

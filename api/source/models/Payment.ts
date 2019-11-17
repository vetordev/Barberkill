import { Model, DataTypes, Sequelize } from 'sequelize';

export class Payment extends Model {
  static start(connection: Sequelize){
    this.init({
      formOf_payment: DataTypes.STRING(70)
    },{
      sequelize: connection,
      modelName: 'Payment'
    });
  }
}

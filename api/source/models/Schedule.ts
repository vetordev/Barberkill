import { Model, DataTypes, Sequelize } from 'sequelize';

export class Schedule extends Model {
  static start(connection: Sequelize){
    this.init({
      data: DataTypes.DATE,
      horary: DataTypes.DATE,
      observation: DataTypes.TEXT
    },{
      sequelize: connection,
      modelName: 'Schedule'
    });
  }

  static associate(models: any){
    this.belongsTo(models.Client, { foreignKey: "client_id", as: 'clients' });    
    this.belongsTo(models.Service, { foreignKey: "service_id", as: 'services' });
    this.belongsTo(models.Employee, { foreignKey: "employee_id", as: 'employees' });

    // N <=> N
    this.belongsToMany(models.Payment, { foreignKey: 'schedule_id', through: 'attendances', as: 'payment_sc' });
  }
}



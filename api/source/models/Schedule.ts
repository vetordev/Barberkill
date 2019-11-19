import { Model, DataTypes, Sequelize } from 'sequelize';

export class Schedule extends Model {
  static start(connection: Sequelize){
    this.init({
      date: DataTypes.STRING(8),
      horary: DataTypes.STRING(4),
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

    this.hasOne(models.Attendance, { foreignKey: 'schedule_id', as: 'attendances' });

    // N <=> N
    // this.belongsToMany(models.Payment, { foreignKey: 'schedule_id', through: 'attendances', as: 'payment_sc' });
  }
}



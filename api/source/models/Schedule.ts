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
    this.hasOne(models.Client, { foreignKey: "client_id", as: 'clients' });    
    this.hasOne(models.Service, { foreignKey: "service_id", as: 'services' });
    this.hasOne(models.Employee, { foreignKey: "employee_id", as: 'employees' });
  }
}



import { Model, DataTypes, Sequelize } from 'sequelize';

export class EmployeesPositions extends Model {
  static start(connection: Sequelize){
    this.init({
      employee_id: DataTypes.INTEGER,
      position_id: DataTypes.INTEGER
    },{
      sequelize: connection,
      modelName: 'EmployeesPositions'
    })
  }
}
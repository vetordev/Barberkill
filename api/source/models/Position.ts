import { Model, DataTypes, Sequelize } from 'sequelize';


export class Position extends Model {
  static start(connection: Sequelize){
    this.init({
      position: DataTypes.STRING(100),
      salary: DataTypes.FLOAT
    }, {
      sequelize: connection,
      modelName: 'Position'
    });
  }

  static associate(models: any){
    this.belongsToMany(models.Employee, { foreignKey: 'position_id', through: { model: models.EmployeesPositions }, as: 'employees_ps'});
  }
}
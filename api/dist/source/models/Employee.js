"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Employee extends sequelize_1.Model {
    static start(connection) {
        this.init({
            name: sequelize_1.DataTypes.STRING(100),
            email: sequelize_1.DataTypes.STRING(100),
            cpf: sequelize_1.DataTypes.STRING(8),
            telephone: sequelize_1.DataTypes.STRING(8),
            cellphone: sequelize_1.DataTypes.STRING(11),
            rg: sequelize_1.DataTypes.STRING(15),
            num_address: sequelize_1.DataTypes.STRING(10),
            comp_address: sequelize_1.DataTypes.STRING(100)
        }, {
            sequelize: connection,
            modelName: 'Employee'
        });
    }
    static associate(models) {
        this.belongsTo(models.Address, {
            foreignKey: 'cep_id', as: 'address'
        });
        this.belongsToMany(models.Position, { foreignKey: 'employee_id', through: { model: models.EmployeesPositions }, as: 'positions' });
    }
}
exports.Employee = Employee;

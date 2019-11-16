"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class EmployeesPositions extends sequelize_1.Model {
    static start(connection) {
        this.init({
            employee_id: sequelize_1.DataTypes.INTEGER,
            position_id: sequelize_1.DataTypes.INTEGER
        }, {
            sequelize: connection,
            modelName: 'employees_positions'
        });
    }
}
exports.EmployeesPositions = EmployeesPositions;

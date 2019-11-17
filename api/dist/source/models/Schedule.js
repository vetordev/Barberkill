"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Schedule extends sequelize_1.Model {
    static start(connection) {
        this.init({
            data: sequelize_1.DataTypes.DATE,
            horary: sequelize_1.DataTypes.DATE,
            observation: sequelize_1.DataTypes.TEXT
        }, {
            sequelize: connection,
            modelName: 'Schedule'
        });
    }
    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: "client_id", as: 'clients' });
        this.belongsTo(models.Service, { foreignKey: "service_id", as: 'services' });
        this.belongsTo(models.Employee, { foreignKey: "employee_id", as: 'employees' });
    }
}
exports.Schedule = Schedule;

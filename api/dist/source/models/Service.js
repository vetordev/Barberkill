"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Service extends sequelize_1.Model {
    static start(connection) {
        this.init({
            service: sequelize_1.DataTypes.STRING(70),
            value: sequelize_1.DataTypes.FLOAT
        }, {
            sequelize: connection,
            modelName: "Service"
        });
    }
    static associate(models) {
        this.hasMany(models.Schedule, {
            foreignKey: 'service_id', as: 'schedules'
        });
    }
}
exports.Service = Service;

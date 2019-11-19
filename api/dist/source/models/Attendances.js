"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Attendance extends sequelize_1.Model {
    static start(connection) {
        this.init({
            payment_id: sequelize_1.DataTypes.INTEGER,
            schedule_id: sequelize_1.DataTypes.INTEGER
        }, {
            sequelize: connection,
            modelName: 'Attendance'
        });
    }
    static associate(models) {
        this.belongsTo(models.Schedule, { foreignKey: 'schedule_id', as: 'schedules' });
        this.belongsTo(models.Payment, { foreignKey: 'payment_id', as: 'payments' });
    }
}
exports.Attendance = Attendance;

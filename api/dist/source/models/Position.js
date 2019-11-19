"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Position extends sequelize_1.Model {
    static start(connection) {
        this.init({
            position: sequelize_1.DataTypes.STRING(100),
            salary: sequelize_1.DataTypes.FLOAT
        }, {
            sequelize: connection,
            modelName: 'Position'
        });
    }
    static associate(models) {
        this.belongsToMany(models.Employee, { foreignKey: 'position_id', through: 'employees_positions', as: 'employees_ps' });
    }
}
exports.Position = Position;

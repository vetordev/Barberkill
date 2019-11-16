"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Address extends sequelize_1.Model {
    static start(connection) {
        this.init({
            street: sequelize_1.DataTypes.STRING(100),
            city: sequelize_1.DataTypes.STRING(78),
            state: sequelize_1.DataTypes.STRING(2),
            neighborhood: sequelize_1.DataTypes.STRING(45)
        }, {
            sequelize: connection,
            modelName: 'Address'
        });
    }
    static associate(models) {
        this.hasMany(models.Employee, {
            foreignKey: 'cep_id', as: 'employees'
        });
    }
}
exports.Address = Address;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
    static start(connection) {
        this.init({
            name: sequelize_1.DataTypes.STRING,
            email: sequelize_1.DataTypes.STRING,
            password: sequelize_1.DataTypes.STRING(12),
            cpf: sequelize_1.DataTypes.STRING(11),
            telephone: sequelize_1.DataTypes.STRING,
            cellphone: sequelize_1.DataTypes.STRING,
        }, {
            sequelize: connection,
            modelName: 'Client'
        });
    }
    static associate(models) {
        this.hasMany(models.Schedule, {
            foreignKey: 'client_id', as: 'schedules'
        });
    }
}
exports.Client = Client;

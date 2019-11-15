"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
    static start(connection) {
        this.init({
            name: sequelize_1.DataTypes.STRING,
            email: sequelize_1.DataTypes.STRING,
        }, {
            sequelize: connection,
            modelName: 'Client'
        });
    }
}
exports.Client = Client;

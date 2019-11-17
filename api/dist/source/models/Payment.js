"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Payment extends sequelize_1.Model {
    static start(connection) {
        this.init({
            formOf_payment: sequelize_1.DataTypes.STRING(70)
        }, {
            sequelize: connection,
            modelName: 'Payment'
        });
    }
}
exports.Payment = Payment;

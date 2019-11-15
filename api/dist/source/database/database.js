"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Client_1 = require("../models/Client");
const Employee_1 = require("../models/Employee");
const Address_1 = require("../models/Address");
class Database {
    start() {
        return new Promise((resolve, reject) => {
            try {
                this.database = new sequelize_1.Sequelize(database_1.dbConfig);
                Client_1.Client.start(this.database);
                Address_1.Address.start(this.database);
                Employee_1.Employee.start(this.database);
                Employee_1.Employee.associate(this.database.models);
                Address_1.Address.associate(this.database.models);
                resolve(this);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.Database = Database;

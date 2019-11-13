"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Database {
    start() {
        return new Promise((resolve, reject) => {
            try {
                this.database = new sequelize_1.Sequelize(database_1.dbConfig);
                resolve(this);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.Database = Database;

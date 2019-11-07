"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
class Database {
    start() {
        const connection = new Sequelize('');
        return new Promise((resolve, reject) => {
        });
    }
}
exports.Database = Database;

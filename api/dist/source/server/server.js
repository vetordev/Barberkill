"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const express = require("express");
class Server {
    initializeDB() {
        return new Promise((resolve, reject) => {
            try {
                this.database = new database_1.Database();
                resolve(this.database.start());
            }
            catch (error) {
                reject(error);
            }
        });
    }
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.app = express();
                this.app.use(express.json());
                this.app.get('/', (req, res, next) => {
                    res.json({ connected: true });
                });
                this.app.listen(3002, () => {
                    resolve(this.app);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /* Método para iniciar tudo */
    bootstrap() {
        // return new Promise((resolve,))
        return this.initializeDB().then(() => this.initRoutes().then(() => this));
    }
}
exports.Server = Server;

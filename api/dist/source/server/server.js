"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const express = require("express");
const cors = require("cors");
const enviroment_1 = require("../config/enviroment");
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
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.app = express();
                this.app.use(cors());
                this.app.use(express.json());
                for (let router of routers) {
                    this.app.use(router.applyRoutes());
                }
                this.app.get('/', (req, res, next) => {
                    res.json({ connected: true });
                });
                this.app.listen(enviroment_1.enviroment.server.port, server => {
                    resolve(this.app);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /* Método para iniciar tudo */
    bootstrap(routers = []) {
        // return new Promise((resolve,))
        return this.initializeDB().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;

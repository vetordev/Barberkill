"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    initializeDB() {
        return new Promise((resolve, reject) => {
        });
    }
    initRoutes() {
        return new Promise((resolve, reject) => {
        });
    }
    /* Método para iniciar tudo */
    bootstrap() {
        return this.initializeDB().then(() => this);
    }
}
exports.Server = Server;

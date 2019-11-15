"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const client_controller_1 = require("../controllers/client.controller");
class ClientRouter {
    constructor() {
        this.application = express.Router();
    }
    applyRoutes() {
        //buscar todos os clientes
        this.application.get('/clients', client_controller_1.ClientController.index);
        //inserir um cliene
        this.application.post('/clients', client_controller_1.ClientController.store);
        return this.application;
    }
}
exports.clientRouter = new ClientRouter();

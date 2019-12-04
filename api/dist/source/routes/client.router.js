"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
class ClientRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        //buscar todos os clientes
        this.application.get('/clients', client_controller_1.ClientController.index);
        //inserir um cliene
        this.application.post('/clients', client_controller_1.ClientController.store);
        //Rota para verificar se um email existe
        this.application.get('/clients/email', client_controller_1.ClientController.existsEmail);
        //Mostrar o client que tem certo id
        this.application.get('/clients/:id', client_controller_1.ClientController.show);
        return this.application;
    }
}
exports.clientRouter = new ClientRouter();

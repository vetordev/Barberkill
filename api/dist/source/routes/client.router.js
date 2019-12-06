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
        this.application.get('/clients/email', client_controller_1.ClientController.findByEmail);
        //Mostrar o client que tem certo id
        this.application.get('/clients/:id', client_controller_1.ClientController.show);
        //Alterar um client
        this.application.put('/clients/:id', client_controller_1.ClientController.update);
        //Mostrar os agendamentos
        this.application.get('/clients/:id/schedules', client_controller_1.ClientController.showSchedules);
        //Deletar um client
        this.application.delete('/clients/:id', client_controller_1.ClientController.destroy);
        //Logar um cliente
        this.application.get('/clients/:email/login', client_controller_1.ClientController.loginClient);
        return this.application;
    }
}
exports.clientRouter = new ClientRouter();

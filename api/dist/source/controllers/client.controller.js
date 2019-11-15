"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../models/Client");
class ClientController {
    static store(req, res) {
        // Recebendo parâmetros do corpo da requisição
        // const { name, email } = req.body;
        Client_1.Client.create(req.body).then(client => {
            res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Client_1.Client.findAll().then(clients => {
            res.json(clients);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ClientController = ClientController;

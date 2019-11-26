"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../models/Client");
class ClientController {
    static store(req, res) {
        // Recebendo parâmetros do corpo da requisição
        // const { name, email } = req.body;
        Client_1.Client.create(req.body).then(client => {
            return res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Client_1.Client.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }).then(clients => {
            return res.json(clients);
        }).catch(error => {
            console.log(error);
        });
    }
    static existsEmail(req, res) {
        const { email } = req.body;
        Client_1.Client.findOne({
            where: { email }
        }).then(client => {
            if (client === null)
                return res.status(400).json({ client: "not exists" });
            return res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ClientController = ClientController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../models/Client");
const Schedule_1 = require("../models/Schedule");
const shajs = require("sha.js");
class ClientController {
    static store(req, res) {
        // Recebendo parâmetros do corpo da requisição
        // const { name, email } = req.body;
        req.body.password = shajs('sha512').update(req.body.password).digest('hex');
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
    static findByEmail(req, res) {
        const { email } = req.query;
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
    static show(req, res) {
        const { id } = req.params;
        Client_1.Client.findByPk(id, {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }).then(client => {
            if (client === null)
                return res.status(400).json({ error: "client not found" });
            return res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
    static update(req, res) {
        const { id } = req.params;
        Client_1.Client.update(req.body, {
            where: { id }
        }).then(schedule => {
            return res.json(schedule);
        }).catch(error => {
            console.log(error);
        });
    }
    static showSchedules(req, res) {
        const { id } = req.params;
        Schedule_1.Schedule.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'client_id', 'service_id', 'employee_id'] },
            include: [
                {
                    association: 'employees', attributes: { exclude: ['createdAt', 'updatedAt'] },
                },
                {
                    association: "services", attributes: { exclude: ['createdAt', 'updatedAt', 'position_id'] },
                },
                {
                    association: "clients", attributes: { exclude: ['createdAt', 'updatedAt'] },
                    where: { id }
                }
            ]
        }).then(schedules => {
            return res.json(schedules);
        }).catch(error => {
            console.log(error);
        });
    }
    static destroy(req, res) {
        const { id } = req.params;
        Client_1.Client.destroy({
            where: { id }
        }).then(client => {
            return res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ClientController = ClientController;

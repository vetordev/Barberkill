"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../models/Service");
const Position_1 = require("../models/Position");
class ServiceController {
    static store(req, res) {
        Service_1.Service.create(req.body).then(service => {
            return res.json(service);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Service_1.Service.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }).then(services => {
            return res.json(services);
        });
    }
    static showEmployees(req, res) {
        const { service } = req.headers;
        Position_1.Position.findOne({
            attributes: [],
            include: [
                {
                    association: 'employees',
                    attributes: ['name'],
                    through: { attributes: [] },
                },
                {
                    association: 'services',
                    attributes: ['service', 'value'],
                    where: { service }
                    //Requirido que ele tenha tal serviço
                }
            ]
        }).then(position => {
            return res.json(position);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ServiceController = ServiceController;

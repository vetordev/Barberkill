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
        const { id } = req.params;
        Position_1.Position.findAll({
            attributes: [],
            include: [
                {
                    association: 'employees',
                    attributes: ['id', 'name'],
                    through: { attributes: [] },
                },
                {
                    association: 'services',
                    attributes: [],
                    where: { id },
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

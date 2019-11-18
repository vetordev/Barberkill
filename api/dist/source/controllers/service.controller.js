"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../models/Service");
class ServiceController {
    static store(req, res) {
        Service_1.Service.create(req.body).then(service => {
            return res.json(service);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Service_1.Service.findAll().then(services => {
            return res.json(services);
        });
    }
}
exports.ServiceController = ServiceController;

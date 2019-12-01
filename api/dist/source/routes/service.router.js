"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_controller_1 = require("../controllers/service.controller");
class ServiceRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        this.application.post('/services', service_controller_1.ServiceController.store);
        this.application.get('/services', service_controller_1.ServiceController.index);
        //Mostrar os employees que fazem tal service
        this.application.get('/services/employees', service_controller_1.ServiceController.showEmployees);
        return this.application;
    }
    ;
}
exports.serviceRouter = new ServiceRouter();

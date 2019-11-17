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
        return this.application;
    }
    ;
}
exports.serviceRouter = new ServiceRouter();

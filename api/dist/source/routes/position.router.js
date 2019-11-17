"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const position_controller_1 = require("../controllers/position.controller");
class PositionRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        //Inserir uma position e um employee   
        this.application.post('/employees/:employee_id/positions', position_controller_1.PositionController.store);
        //Buscando todos
        this.application.get('/positions', position_controller_1.PositionController.index);
        //Mostrando as positions de um employee
        this.application.get('/employees/:employee_id/positions', position_controller_1.PositionController.show);
        return this.application;
    }
}
exports.positionRouter = new PositionRouter();

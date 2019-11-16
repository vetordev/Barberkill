"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const position_controller_1 = require("../controllers/position.controller");
class PositionRouter {
    constructor() {
        this.application = express.Router();
    }
    applyRoutes() {
        this.application.post('/employees/:employee_id/positions', position_controller_1.PositionController.store);
        this.application.get('/positions', (req, res) => {
            res.json({ working: true });
        });
        return this.application;
    }
}
exports.positionRouter = new PositionRouter();

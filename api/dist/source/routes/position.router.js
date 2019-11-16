"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class PositionRouter {
    constructor() {
        this.application = express.Router();
    }
    applyRoutes() {
        this.application.post('employees/:employee_id/positions');
        return this.application;
    }
}

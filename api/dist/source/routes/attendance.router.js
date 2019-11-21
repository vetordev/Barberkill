"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("../controllers/attendance.controller");
class AttendanceRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        //Criar um attendance
        this.application.post('/attendances', attendance_controller_1.AttendanceController.store);
        //Buscar todos
        this.application.get('/attendances', attendance_controller_1.AttendanceController.index);
        return this.application;
    }
}
exports.attendanceRouter = new AttendanceRouter();

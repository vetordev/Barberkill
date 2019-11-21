"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attendances_1 = require("../models/Attendances");
class AttendanceController {
    static store(req, res) {
        Attendances_1.Attendance.create(req.body).then(attendance => {
            return res.json(attendance);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Attendances_1.Attendance.findAll().then(attendances => {
            return res.json(attendances);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.AttendanceController = AttendanceController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attendances_1 = require("../models/Attendances");
class AttendanceController {
    static store(req, res) {
        console.log(req.params);
        Attendances_1.Attendance.create(req.body).then(attendance => {
            return res.json(attendance);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.AttendanceController = AttendanceController;

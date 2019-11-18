"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = require("../models/Schedule");
class ScheduleController {
    static store(req, res) {
        Schedule_1.Schedule.create(req.body, {}).then(schedule => {
            return res.json(schedule);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ScheduleController = ScheduleController;

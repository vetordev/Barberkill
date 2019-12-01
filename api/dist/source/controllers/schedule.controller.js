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
    static index(req, res) {
        Schedule_1.Schedule.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    association: 'employees', attributes: ['name'],
                },
                {
                    association: "services", attributes: ['service', "value"]
                },
                {
                    association: "clients", attributes: ['name']
                }
            ]
        }).then(schedules => {
            return res.json(schedules);
        }).catch(error => {
            console.log(error);
        });
    }
    static show(req, res) {
        const { id } = req.params;
        Schedule_1.Schedule.findByPk(id).then(schedule => {
            return res.json(schedule);
        }).catch(error => {
            console.log(error);
        });
    }
    static update(req, res) {
        const { id } = req.params;
        Schedule_1.Schedule.update(req.body, {
            where: { id }
        }).then(schedule => {
            return res.json(schedule);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.ScheduleController = ScheduleController;

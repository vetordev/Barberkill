"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("../models/Position");
const Employee_1 = require("../models/Employee");
class PositionController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employee_id } = req.params;
            const { name, salary } = req.body;
            const employee = yield Employee_1.Employee.findByPk(employee_id).then(employee => {
                if (employee === null)
                    return res.status(404).json({ error: "Employee not found" });
            });
            //Procura uma position, se não encontrar a cria
            Position_1.Position.findOrCreate({
                where: { name },
                //Resto dos dados (Caso for criar)
                defaults: { salary }
            }).then(([position, created]) => {
                employee.addPosition(position);
                return res.json(position);
            });
        });
    }
}
exports.PositionController = PositionController;

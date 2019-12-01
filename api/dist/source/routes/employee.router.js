"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
class EmployeeRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        // Inserir um usuário
        this.application.post('/employees/:cep_id', employee_controller_1.EmployeeController.store);
        //Mostrar todos
        this.application.get('/employees', employee_controller_1.EmployeeController.index);
        //Mostrar um
        this.application.get('/employees/:id', employee_controller_1.EmployeeController.show);
        //Mostrar os serviços de um employee
        this.application.get('/employees/:id/services', employee_controller_1.EmployeeController.showServices);
        return this.application;
    }
    ;
}
exports.employeeRouter = new EmployeeRouter();

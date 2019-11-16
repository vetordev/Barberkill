"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("../models/Employee");
const Address_1 = require("../models/Address");
class EmployeeController {
    static store(req, res) {
        const { cep_id } = req.params;
        const { name, email, cpf, telephone, cellphone, rg, num_address, comp_address } = req.body;
        Address_1.Address.findByPk(cep_id).then(address => {
            if (address === null) {
                return res.status(400).json({ error: 'Address not found' });
            }
        });
        Employee_1.Employee.create({
            name, email, cpf, telephone, cellphone, rg, cep_id, num_address, comp_address
        }).then(client => {
            return res.json(client);
        }).catch(error => {
            console.log(error);
        });
    }
    static index(req, res) {
        Employee_1.Employee.findAll().then(employees => {
            return res.json(employees);
        });
    }
    static show(req, res) {
        const { id } = req.params;
        Employee_1.Employee.findByPk(id, {
            include: [
                {
                    association: 'address',
                }
            ]
        }).then(employee => {
            if (employee === null)
                return res.status(404).json({ error: 'User not found' });
            return res.json(employee);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.EmployeeController = EmployeeController;

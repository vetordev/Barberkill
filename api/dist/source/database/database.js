"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Client_1 = require("../models/Client");
const Employee_1 = require("../models/Employee");
const Address_1 = require("../models/Address");
const Position_1 = require("../models/Position");
const Employees_Positions_1 = require("../models/Employees_Positions");
const Service_1 = require("../models/Service");
const Payment_1 = require("../models/Payment");
const Schedule_1 = require("../models/Schedule");
class Database {
    start() {
        return new Promise((resolve, reject) => {
            try {
                this.database = new sequelize_1.Sequelize(database_1.dbConfig);
                Client_1.Client.start(this.database);
                Address_1.Address.start(this.database);
                Employee_1.Employee.start(this.database);
                Position_1.Position.start(this.database);
                Employees_Positions_1.EmployeesPositions.start(this.database);
                Service_1.Service.start(this.database);
                Payment_1.Payment.start(this.database);
                Schedule_1.Schedule.start(this.database);
                Client_1.Client.associate(this.database.models);
                Address_1.Address.associate(this.database.models);
                Employee_1.Employee.associate(this.database.models);
                Position_1.Position.associate(this.database.models);
                Service_1.Service.associate(this.database.models);
                Payment_1.Payment.associate(this.database.models);
                Schedule_1.Schedule.associate(this.database.models);
                resolve(this);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.Database = Database;

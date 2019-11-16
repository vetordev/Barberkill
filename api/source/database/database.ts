import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/database';
import { Client } from '../models/Client';
import { Employee } from '../models/Employee';
import { Address } from '../models/Address';
import { Position } from '../models/Position';
import { EmployeesPositions } from '../models/Employees_Positions';
export class Database {
  
  database: Sequelize;
 
  start(): Promise<Database>{
    return new Promise((resolve, reject) => {
      try {
        this.database = new Sequelize(dbConfig);

        Client.start(this.database);
        Address.start(this.database);
        Employee.start(this.database);
        Position.start(this.database)
        EmployeesPositions.start(this.database);

        Employee.associate(this.database.models);
        Address.associate(this.database.models);
        Position.associate(this.database.models);

        resolve(this);
      }catch(error) {
        reject(error);
      }
    });
  }
}
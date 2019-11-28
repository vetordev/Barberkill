import { Sequelize } from 'sequelize';
import { Client } from '../models/Client';
import { Employee } from '../models/Employee';
import { Address } from '../models/Address';
import { Position } from '../models/Position';
import { Service } from '../models/Service';
import { Payment } from '../models/Payment';
import { Schedule } from '../models/Schedule';
import { Attendance } from '../models/Attendances';
import { enviroment } from '../config/enviroment';

export class Database {
  
  database: Sequelize;
 
  start(): Promise<Database>{
    return new Promise((resolve, reject) => {
      try {
        this.database = new Sequelize(enviroment.db);

        Client.start(this.database);
        Address.start(this.database);
        Employee.start(this.database);
        Position.start(this.database)
        Service.start(this.database);
        Payment.start(this.database);
        Schedule.start(this.database);
        Attendance.start(this.database);

        Client.associate(this.database.models);
        Address.associate(this.database.models);
        Employee.associate(this.database.models);
        Position.associate(this.database.models);
        Service.associate(this.database.models);
        Payment.associate(this.database.models);
        Schedule.associate(this.database.models);
        Attendance.associate(this.database.models);
        
        resolve(this);
      }catch(error) {
        reject(error);
      }
    });
  }
}
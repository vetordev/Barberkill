import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/database';
import { Client } from '../models/Client';

export class Database {
  
  database: Sequelize;
 
  start(): Promise<Database>{
    return new Promise((resolve, reject) => {
      try {
        this.database = new Sequelize(dbConfig);
        Client.start(this.database);
        resolve(this);
      }catch(error) {
        reject(error);
      }
    });
  }
}
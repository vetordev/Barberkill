import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/database';

export class Database {
  
  database: Sequelize;
 
  start(): Promise<Database>{
    return new Promise((resolve, reject) => {
      try {
        this.database = new Sequelize(dbConfig);
        resolve(this);
      }catch(error) {
        reject(error);
      }
    });
  }
}
import * as Sequelize from 'sequelize';
import { reject } from 'bluebird';

export class Database {
  
  database: Sequelize.Sequelize
  start(): Promise<Sequelize.Sequelize>{
    const connection = new Sequelize('');
    return new Promise((resolve, reject) => {

    });
  }
}
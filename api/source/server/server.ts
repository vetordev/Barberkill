import { Database } from '../database/database'
import * as express from 'express';


export class Server {

  database: Database;
  app: express.Application;

  initializeDB(): Promise<Database>{
    return new Promise((resolve, reject) => {
      try {
        this.database = new Database();
        resolve(this.database.start());        
      } catch (error) {
        reject(error)
      }
    });
  }
  initRoutes(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.app = express();

        this.app.use(express.json());

        this.app.get('/', (req, res, next) => {
          res.json({connected : true});
        });

        this.app.listen(3002, () => {
          resolve(this.app);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  /* Método para iniciar tudo */
  bootstrap(): Promise<Server>{
    // return new Promise((resolve,))
    return this.initializeDB().then(() => 
    this.initRoutes().then(() => this));
    
  }
}

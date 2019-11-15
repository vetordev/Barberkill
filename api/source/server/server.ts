import { Database } from '../database/database'
import * as express from 'express';
import { Router } from '../config/Router';

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
  initRoutes(routers: Router[]): Promise<express.Application> {
    return new Promise((resolve, reject) => {
      try {
        this.app = express();

        this.app.use(express.json());

        for (let router of routers){
          this.app.use(router.applyRoutes());
        }

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
  bootstrap(routers: Router[] = []): Promise<Server>{
    // return new Promise((resolve,))
    return this.initializeDB().then(() => 
    this.initRoutes(routers).then(() => this));
    
  }
}

import { Database } from '../database/database'
import * as express from 'express';
import { Routers } from '../config/Router';
import * as cors from 'cors';
import { enviroment } from '../config/enviroment';
export class Server {

  database: Database;
  app: express.Application;
  port: number

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
  initRoutes(routers: Routers[]): Promise<express.Application> {
    return new Promise((resolve, reject) => {
      try {
        this.app = express();
        
        this.app.use(cors());
        this.app.use(express.json());
        
        for (let router of routers){
          this.app.use(router.applyRoutes());
        }

        this.app.get('/', (req, res, next) => {
          res.json({connected : true});
        });

        this.app.listen(enviroment.server.port, server => {
          resolve(this.app);
        });
        
      } catch (error) {
        reject(error);
      }
    });
  }
  /* Método para iniciar tudo */
  bootstrap(routers: Routers[] = []): Promise<Server>{
    // return new Promise((resolve,))
    return this.initializeDB().then(() => 
    this.initRoutes(routers).then(() => this));
    
  }
}


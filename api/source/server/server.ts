import { Database } from '../database/database'

export class Server {

  initializeDB(): Promise<any>{
    return new Promise((resolve, reject) => {
      
    });
  }
  initRoutes(): Promise<any> {
    return new Promise((resolve, reject) => {

    });
  }

  /* Método para iniciar tudo */
  bootstrap(): Promise<Server>{
    return this.initializeDB().then(() => this);
  }
}

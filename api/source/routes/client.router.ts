
import * as express from 'express';
import { Router } from '../config/Router';
import { ClientController } from '../controllers/client.controller';

class ClientRouter implements Router {

  application: express.Router = express.Router();

  applyRoutes(){
    
    //buscar todos os clientes
    this.application.get('/clients', ClientController.index);
    //inserir um cliene
    this.application.post('/clients', ClientController.store);
    
    return this.application;
  }
}


export const clientRouter = new ClientRouter();
import { Router } from 'express';
import { Routers } from '../config/Router';
import { ClientController } from '../controllers/client.controller';

class ClientRouter implements Routers {

  application: Router = Router();

  applyRoutes(){
    
    //buscar todos os clientes
    this.application.get('/clients', ClientController.index);
    //inserir um cliene
    this.application.post('/clients', ClientController.store);
    
    return this.application;
  }
}


export const clientRouter = new ClientRouter();
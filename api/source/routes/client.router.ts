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

    //Rota para verificar se um email existe
    this.application.get('/clients/email', ClientController.existsEmail);

    //Mostrar o client que tem certo id
    this.application.get('/clients/:id', ClientController.show);

    //Alterar um client
    this.application.put('/clients/:id', ClientController.update);
    
    return this.application;
  }
}


export const clientRouter = new ClientRouter();
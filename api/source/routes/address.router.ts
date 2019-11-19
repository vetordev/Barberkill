import { Router } from 'express';
import { Routers } from '../config/Router';
import { AddressController } from '../controllers/address.controller';

class AddressRouter implements Routers {

  application: Router = Router();

  applyRoutes(){

    //Inserir um endereço
    this.application.post('/addresses', AddressController.store);
    //Buscar todos os endereços
    this.application.get('/addresses', AddressController.index);
    return this.application;
  }
}

export const addressRouter = new AddressRouter();
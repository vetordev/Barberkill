import { Router } from 'express';
import { Routers } from '../config/Router';
import { AddressController } from '../controllers/address.controller';

class AddressRouter implements Routers {

  application: Router = Router();

  applyRoutes(){
    this.application.post('/addresses', AddressController.store);

    return this.application;
  }
}

export const addressRouter = new AddressRouter();
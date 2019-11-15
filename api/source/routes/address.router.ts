import * as express from 'express';
import { Router } from '../config/Router';
import { AddressController } from '../controllers/address.controller';

class AddressRouter implements Router {

  application: express.Router = express.Router();

  applyRoutes(){
    this.application.post('/addresses', AddressController.store);

    return this.application;
  }
}

export const addressRouter = new AddressRouter();
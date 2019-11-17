import { Router } from 'express';
import { Routers } from '../config/Router';
import { ServiceController } from '../controllers/service.controller';

class ServiceRouter implements Routers {
  application: Router = Router();
  applyRoutes(){  

    this.application.post('/services', ServiceController.store);
    return this.application;
  };
}

export const serviceRouter = new ServiceRouter();

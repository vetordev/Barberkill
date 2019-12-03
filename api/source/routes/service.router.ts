import { Router } from 'express';
import { Routers } from '../config/Router';
import { ServiceController } from '../controllers/service.controller';

class ServiceRouter implements Routers {
  application: Router = Router();
  applyRoutes(){  

    this.application.post('/services', ServiceController.store);
    this.application.get('/services', ServiceController.index);

    //Mostrar os employees que fazem tal service
    this.application.get('/services/:id/employees', ServiceController.showEmployees);
    return this.application;
  };
}

export const serviceRouter = new ServiceRouter();

import { Router } from 'express';
import { Routers } from '../config/Router';
import { PositionController } from '../controllers/position.controller';

class PositionRouter implements Routers{
   application: Router = Router();
   applyRoutes(){

   //Inserir uma position e um employee   
   this.application.post('/employees/:employee_id/positions', PositionController.store);

   //Buscando todos
   this.application.get('/positions', PositionController.index);

   //Mostrando as positions de um employee
   this.application.get('/employees/:employee_id/positions/services', PositionController.show);

    return this.application;
   }
}

export const positionRouter = new PositionRouter();
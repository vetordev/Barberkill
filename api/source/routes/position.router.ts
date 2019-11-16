import * as express from 'express';
import { Router } from '../config/Router';
import { PositionController } from '../controllers/position.controller';

class PositionRouter implements Router{
   application: express.Router = express.Router();
   applyRoutes(){

   //Inserir uma position e um employee   
   this.application.post('/employees/:employee_id/positions', PositionController.store);

   //Buscando todos
   this.application.get('/positions', PositionController.index);

   //Mostrando as positions de um employee
   this.application.get('/employees/:employee_id/positions', PositionController.show);

    return this.application;
   }
}

export const positionRouter = new PositionRouter();
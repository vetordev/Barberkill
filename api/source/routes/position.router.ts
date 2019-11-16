import * as express from 'express';
import { Router } from '../config/Router';


class PositionRouter implements Router{
   application: express.Router = express.Router();
   applyRoutes(){

    this.application.post('employees/:employee_id/positions');

    return this.application;
   }
}
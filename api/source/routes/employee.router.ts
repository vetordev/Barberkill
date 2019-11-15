
import * as express from 'express';
import { Router } from '../config/Router';
import { EmployeeController } from '../controllers/employee.controller';

class EmployeeRouter implements Router {
  application: express.Router = express.Router()
  applyRoutes(){
    this.application.post('/employee/:cep_id', EmployeeController.store)
    return this.application;
  };
}

export const employeeRouter = new EmployeeRouter();
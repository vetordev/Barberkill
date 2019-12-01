import { Router } from 'express';
import { Routers } from '../config/Router';
import { EmployeeController } from '../controllers/employee.controller';

class EmployeeRouter implements Routers {
  application: Router = Router()
  applyRoutes(){
    // Inserir um usuário
    this.application.post('/employees/:cep_id', EmployeeController.store)
    //Mostrar todos
    this.application.get('/employees', EmployeeController.index);
    //Mostrar um
    this.application.get('/employees/:id', EmployeeController.show);

    //Mostrar os serviços de um employee
    this.application.get('/employees/:id/services', EmployeeController.showServices);
    return this.application;
  };
}

export const employeeRouter = new EmployeeRouter(); 
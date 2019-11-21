import { Router } from 'express';
import { Routers } from '../config/Router';
import { AttendanceController } from '../controllers/attendance.controller';

class AttendanceRouter implements Routers {
  application: Router = Router();

  applyRoutes(){

    //Criar um attendance
    this.application.post('/attendances', AttendanceController.store);
    //Buscar todos
    this.application.get('/attendances', AttendanceController.index);

    this.application.get('/schedule/payments/attendaces', AttendanceController.showAllData);
    return this.application;
  }
}


export const attendanceRouter = new AttendanceRouter();
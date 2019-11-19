import { Router } from 'express';
import { Routers } from '../config/Router';
import { AttendanceController } from '../controllers/attendance.controller';

class AttendanceRouter implements Routers {
  application: Router = Router();

  applyRoutes(){

    this.application.post('/attendances', AttendanceController.store);

    return this.application;
  }
}


export const attendanceRouter = new AttendanceRouter();
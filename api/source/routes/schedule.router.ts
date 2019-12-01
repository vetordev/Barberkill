import { Router } from 'express';
import { Routers } from '../config/Router';
import { ScheduleController } from '../controllers/schedule.controller';

class ScheduleRouter implements Routers{
  application: Router = Router()
  applyRoutes(){

    this.application.post('/schedules', ScheduleController.store);
    this.application.get('/schedules', ScheduleController.index)
    this.application.get('/schedules/:schedule_id', ScheduleController.show);
    return this.application;
  }
}

export const scheduleRouter = new ScheduleRouter();
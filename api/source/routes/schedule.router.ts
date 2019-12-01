import { Router } from 'express';
import { Routers } from '../config/Router';
import { ScheduleController } from '../controllers/schedule.controller';

class ScheduleRouter implements Routers{
  application: Router = Router()
  applyRoutes(){

    this.application.post('/schedules', ScheduleController.store);
    this.application.get('/schedules', ScheduleController.index)
    this.application.get('/schedules/:id', ScheduleController.show);

    //Alterar um schedule
    this.application.put('/schedules/:id', ScheduleController.update);
    return this.application;
  }
}

export const scheduleRouter = new ScheduleRouter();
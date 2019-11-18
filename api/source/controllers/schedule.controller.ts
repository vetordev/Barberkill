import { Request, Response } from 'express';
import { Schedule } from '../models/Schedule';

export class ScheduleController {
  static store(req: Request, res: Response){
    Schedule.create(req.body, {
    }).then(schedule => {
      return res.json(schedule);
    }).catch(error => {
      console.log(error)
    }); 
  }
}
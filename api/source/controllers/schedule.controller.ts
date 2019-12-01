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

  static index(req: Request, res: Response){
    Schedule.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']},
      include: [
        {
          association: 'employees', attributes: ['name'], 
        },
        {
          association: "services", attributes: ['service', "value"]
        },
        {
          association: "clients", attributes: ['name']
        }
      ]
    }).then(schedules => {
      return res.json(schedules);
    }).catch(error => {
      console.log(error)
    });
  }

  static show(req: Request, res: Response){

    const { schedule_id } = req.params;
    Schedule.findByPk(schedule_id).then(schedule =>{
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    });
  }

  static update(req: Request, res: Response){

    const schedule_id = req.params;

    Schedule.update(req.body, {
      where: { schedule_id }
    }).then(schedule => {
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    })

  }

}
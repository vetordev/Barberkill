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
          association: "clients", attributes: ['name', 'cellphone']
        }
      ]
    }).then(schedules => {
      return res.json(schedules);
    }).catch(error => {
      console.log(error)
    });
  }

  static show(req: Request, res: Response){

    const { id } = req.params;
    Schedule.findByPk(id).then(schedule =>{
      if(schedule === null)
        return res.status(400).json({error : 'Schedule not found'});
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    });
  }

  static update(req: Request, res: Response){

    const { id } = req.params;

    Schedule.update(req.body, {
      where: { id }
    }).then(schedule => {
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    })

  }
  static destroy(req: Request, res: Response){
    const { id } = req.params;

    Schedule.destroy({
      where: {id}
    }).then(schedule => {
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    });
  }


}
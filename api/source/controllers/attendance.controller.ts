import { Attendance } from "../models/Attendances";
import { Request, Response } from 'express';
import { Schedule } from "../models/Schedule";

export class AttendanceController {
  static store(req: Request, res: Response){

    Attendance.create(req.body).then(attendance => {
      return res.json(attendance);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: Request, res: Response){
    Attendance.findAll().then(attendances => {
      return res.json(attendances);
    }).catch(error =>{
      console.log(error);
    })
  }

  static showAllData(req: Request, res: Response){
    Attendance.findAll({
      attributes: ['id'],
      include: [
        {
          association: 'schedules',
          attributes: ['id','date', 'horary', 'observation'],
        },
        {
          association: 'payments',
          attributes: ['form_of_payment'],
        }
      ]
    }).then(attendances => {
      return res.json(attendances);
    }).catch(error => {
      console.log(error);
    });

    
  }
}

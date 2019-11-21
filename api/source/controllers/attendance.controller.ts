import { Attendance } from "../models/Attendances";
import { Request, Response } from 'express';

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
}

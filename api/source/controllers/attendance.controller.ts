import { Attendance } from "../models/Attendances";
import { Request, Response } from 'express';

export class AttendanceController {
  static store(req: Request, res: Response){

    console.log(req.params);
    Attendance.create(req.body).then(attendance => {
      return res.json(attendance);
    }).catch(error => {
      console.log(error);
    });
  }
}

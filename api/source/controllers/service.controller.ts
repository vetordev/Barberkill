import { Request, Response } from 'express';
import { Service } from '../models/Service';

export class ServiceController {
  static store(req: Request, res: Response){
    Service.create(req.body).then(service => {
      return res.json(service);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: Request, res: Response){
    Service.findAll().then(services => {
      return res.json(services);
    });
  }
}
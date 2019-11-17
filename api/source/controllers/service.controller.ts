import * as express from 'express';
import { Service } from '../models/Service';

export class ServiceController {
  static store(req: express.Request, res: express.Response){
    Service.create(req.body).then(service => {
      return res.json(service);
    }).catch(error => {
      console.log(error);
    });
  }
}
import { Request, Response } from 'express';
import { Service } from '../models/Service';
import { Position } from '../models/Position';

export class ServiceController {
  static store(req: Request, res: Response){
    Service.create(req.body).then(service => {
      return res.json(service);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: Request, res: Response){
    Service.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']}
      
    }).then(services => {
      return res.json(services);
    });
  }
  static showEmployees(req: Request, res: Response){

    const { service } = req.headers;

    Position.findOne({
      attributes: [],
      include: [
        {
          association: 'employees',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
        {
          association: 'services',
          attributes: ['service', 'value'],
          where: { service }
          //Requirido que ele faça tal serviço
          
        }
      ]
    }).then(position => {
      return res.json(position);
    }).catch(error => {
      console.log(error);
    });
  }
}
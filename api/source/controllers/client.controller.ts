import { Client } from '../models/Client';
import { Request, Response } from 'express';
import { Schedule } from '../models/Schedule';
import * as shajs from 'sha.js';

export class ClientController {

  static store(req: Request, res: Response){

    // Recebendo parâmetros do corpo da requisição
    // const { name, email } = req.body;
    
    req.body.password = shajs('sha512').update(req.body.password).digest('hex');

    Client.create(req.body).then(client => {
      return res.json(client);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: Request, res: Response){
  
    Client.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }).then(clients => {
      return res.json(clients);
    }).catch(error => {
      console.log(error);
    });
    
  }

  static findByEmail(req: Request, res: Response){

    const { email } = req.query;

    Client.findOne({
      where: {email}
    }).then(client => {
      if (client === null)
        return res.status(400).json({client: "not exists"});
        
      return res.json(client);
    }).catch(error => {
      console.log(error);
    });
  }

  static show(req: Request, res: Response){

    const { id } = req.params;

    Client.findByPk(id,{
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }).then(client => {
      if(client === null)
        return res.status(400).json({error: "client not found"});
      return res.json(client);
    }).catch(error => {
      console.log(error);
    });
  }

  static update(req: Request, res: Response){

    const { id } = req.params;

    Client.update(req.body, {
      where: { id }
    }).then(schedule => {
      return res.json(schedule);
    }).catch(error => {
      console.log(error);
    });
  }
  static showSchedules(req: Request, res: Response){

    const { id } = req.params;
    Schedule.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt', 'client_id', 'service_id', 'employee_id']},
      include: [
        {
          association: 'employees', attributes: {exclude: ['createdAt', 'updatedAt']},
        },
        {
          association: "services", attributes: {exclude: ['createdAt', 'updatedAt', 'position_id']},
        },
        {
          association: "clients", attributes: {exclude: ['createdAt', 'updatedAt']},
          where: { id }
        }
      ]
    }).then(schedules => {
      return res.json(schedules);
    }).catch(error => {
      console.log(error)
    });
  }

  static destroy(req: Request, res: Response){

    const { id } = req.params;

    Client.destroy({
      where: { id }
    }).then(client => {
      return res.json(client);
    }).catch(error => {
      console.log(error);
    })
  }
}



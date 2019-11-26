import { Client } from '../models/Client';
import { Request, Response } from 'express';

export class ClientController {

  static store(req: Request, res: Response){

    // Recebendo parâmetros do corpo da requisição
    // const { name, email } = req.body;

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

  static existsEmail(req: Request, res: Response){

    const { email } = req.body;

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
}



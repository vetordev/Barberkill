import { Client } from '../models/Client';
import * as express from 'express';

export class ClientController {

  static store(req: express.Request, res: express.Response){

    // Recebendo parâmetros do corpo da requisição
    // const { name, email } = req.body;

    Client.create(req.body).then(client => {
      return res.json(client);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: express.Request, res: express.Response){
    
    Client.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }).then(clients => {
      return res.json(clients);
    }).catch(error => {
      console.log(error);
    });
  }
}



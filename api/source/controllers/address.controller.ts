import { Request, Response } from 'express';
import { Address } from '../models/Address';

export class AddressController {
  static store(req: Request, res: Response){
    
    Address.create(req.body).then(address => {
      return res.json(address);
    });
  }

  static index(req: Request, res: Response){
    Address.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']}
    }).then(addresses => {
      return res.json(addresses);
    }).catch(error => {
      console.log(error);
    });
  }
}
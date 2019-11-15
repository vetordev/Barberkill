import * as express from 'express';
import { Address } from '../models/Address';

export class AddressController {
  static store(req: express.Request, res: express.Response){
    
    Address.create(req.body).then(address => {
      return res.json(address);
    });
  }
}
import { Request, Response } from 'express';
import { Payment } from '../models/Payment';

export class PaymentController {
  static store(req: Request, res: Response){

    Payment.create(req.body).then(payment => {
      return res.json(payment);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: Request, res: Response){
    Payment.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }).then(payments => {
      return res.json(payments);
    }).catch(error => {
      console.log(error);
    });
  }
}
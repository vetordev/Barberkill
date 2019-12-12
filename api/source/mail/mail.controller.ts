import {Request, Response} from 'express';
import {transport} from '../services/mail';
import * as dotenv from 'dotenv';
dotenv.config();

export class MailController {
  static sendMail(req: Request, res: Response){
    const { from, subject, text } = req.body;

    transport.sendMail({
      from,
      to: process.env.TO_MAILER,
      subject,
      text
    }, (e, info) => {
      console.log(e)
      console.log(info)
      res.send('Email enviando com sucesso');
    });
  }
}
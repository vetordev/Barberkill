import { Router } from 'express';
import { Routers } from '../config/Router';
import { MailController } from './mail.controller';


class MailRouter implements Routers {
  application: Router = Router();

  applyRoutes(){

    this.application.post('/mail', MailController.sendMail);
    return this.application;
  }
}


export const mailRouter = new MailRouter();
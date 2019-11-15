import { Client } from '../models/Client';
import * as express from 'express';
import { Router } from '../config/Router';

class ClientRouter implements Router {

  application: express.Router = express.Router();
  applyRoutes(){
  
      this.application.get('/client', (req, res, next) =>{
        res.json({ client: 'ok' });
      });
    
    return this.application;
  }
}


export const clientRouter = new ClientRouter();
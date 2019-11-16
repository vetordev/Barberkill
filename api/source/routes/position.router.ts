import * as express from 'express';
import { Router } from '../config/Router';
import { PositionController } from '../controllers/position.controller';

class PositionRouter implements Router{
   application: express.Router = express.Router();
   applyRoutes(){

    this.application.post('/employees/:employee_id/positions', PositionController.store);

    this.application.get('/positions', (req, res) => {
       res.json({working : true})
    })

    return this.application;
   }
}

export const positionRouter = new PositionRouter();
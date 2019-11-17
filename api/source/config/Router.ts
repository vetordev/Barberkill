import * as express from 'express';

export interface Routers {
  application: express.Router;
  applyRoutes();
}
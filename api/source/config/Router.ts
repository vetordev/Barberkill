import * as express from 'express';

export interface Router {
  application: express.Router;
  applyRoutes();
}
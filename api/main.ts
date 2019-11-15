import * as express from 'express';
import {Server} from './source/server/server';
import { clientRouter } from './source/routes/client.router'
const server = new Server();

server.bootstrap([clientRouter]).then(server => {
  console.log('Server is listening on: 3002');
  
}).catch(error => {
  console.log('Server failed to start');
  console.log(error);
  process.exit(1);
});

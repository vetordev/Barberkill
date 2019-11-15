import * as express from 'express';
import {Server} from './source/server/server';
import { clientRouter } from './source/routes/client.router'
import { employeeRouter } from './source/routes/employee.router';
import { addressRouter } from './source/routes/address.router';
const server = new Server();

server.bootstrap([clientRouter, employeeRouter, addressRouter]).then(server => {
  console.log('Server is listening on: 3002');
  
}).catch(error => {
  console.log('Server failed to start');
  console.log(error);
  process.exit(1);
});

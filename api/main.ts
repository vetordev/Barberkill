import * as express from 'express';
import {Server} from './source/server/server';

const server = new Server();

server.bootstrap().then(server => {
  console.log('Server is listening on: 3002');
  
}).catch(error => {
  console.log('Server failed to start');
  console.log(error);
  process.exit(1);
});

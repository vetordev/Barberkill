import {Server} from './source/server/server';
import { clientRouter } from './source/routes/client.router'
import { employeeRouter } from './source/routes/employee.router';
import { addressRouter } from './source/routes/address.router';
import { positionRouter } from './source/routes/position.router';
import { serviceRouter } from './source/routes/service.router';
import { paymentRouter } from './source/routes/payment.router';
import { scheduleRouter } from './source/routes/schedule.router';


const server = new Server();
server.bootstrap([clientRouter, employeeRouter, addressRouter, positionRouter, serviceRouter, paymentRouter, scheduleRouter]).then(server => {
  console.log('Server is listening on: 3002');
}).catch(error => {
  console.log('Server failed to start');
  console.log(error);
  process.exit(1);
});
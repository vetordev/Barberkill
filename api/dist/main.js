"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./source/server/server");
const client_router_1 = require("./source/routes/client.router");
const employee_router_1 = require("./source/routes/employee.router");
const address_router_1 = require("./source/routes/address.router");
const position_router_1 = require("./source/routes/position.router");
const service_router_1 = require("./source/routes/service.router");
const payment_router_1 = require("./source/routes/payment.router");
const schedule_router_1 = require("./source/routes/schedule.router");
const server = new server_1.Server();
server.bootstrap([client_router_1.clientRouter, employee_router_1.employeeRouter, address_router_1.addressRouter, position_router_1.positionRouter, service_router_1.serviceRouter, payment_router_1.paymentRouter, schedule_router_1.scheduleRouter]).then(server => {
    console.log('Server is listening on: 3002');
}).catch(error => {
    console.log('Server failed to start');
    console.log(error);
    process.exit(1);
});

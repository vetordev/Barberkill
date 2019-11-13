"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./source/server/server");
const server = new server_1.Server();
server.bootstrap().then(database => {
    // console.log('Server is listening on: 3002');
    console.log(database);
}).catch(error => {
    console.log('Server failed to start');
    console.log(error);
    process.exit(1);
});

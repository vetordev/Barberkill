"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class ClientRouter {
    constructor() {
        this.application = express.Router();
    }
    applyRoutes() {
        this.application.get('/client', (req, res, next) => {
            res.json({ client: 'ok' });
        });
        return this.application;
    }
}
exports.clientRouter = new ClientRouter();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_controller_1 = require("../controllers/address.controller");
class AddressRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        this.application.post('/addresses', address_controller_1.AddressController.store);
        return this.application;
    }
}
exports.addressRouter = new AddressRouter();
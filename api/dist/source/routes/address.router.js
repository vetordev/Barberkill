"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_controller_1 = require("../controllers/address.controller");
class AddressRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        //Inserir um endereço
        this.application.post('/addresses', address_controller_1.AddressController.store);
        //Buscar todos os endereços
        this.application.get('/addresses', address_controller_1.AddressController.index);
        return this.application;
    }
}
exports.addressRouter = new AddressRouter();

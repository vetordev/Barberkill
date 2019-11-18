"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
class PaymentRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        this.application.post('/payments', payment_controller_1.PaymentController.store);
        this.application.get('/payments', payment_controller_1.PaymentController.index);
        return this.application;
    }
}
exports.paymentRouter = new PaymentRouter();

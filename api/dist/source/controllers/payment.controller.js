"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("../models/Payment");
class PaymentController {
    static store(req, res) {
        Payment_1.Payment.create(req.body).then(payment => {
            return res.json(payment);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.PaymentController = PaymentController;

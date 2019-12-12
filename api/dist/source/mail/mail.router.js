"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controller_1 = require("./mail.controller");
class MailRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        this.application.post('/mail', mail_controller_1.MailController.sendMail);
        return this.application;
    }
}
exports.mailRouter = new MailRouter();

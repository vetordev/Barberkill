"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = require("../services/mail");
const dotenv = require("dotenv");
dotenv.config();
class MailController {
    static sendMail(req, res) {
        const { from, subject, text } = req.body;
        mail_1.transport.sendMail({
            from,
            to: process.env.TO_MAILER,
            subject,
            text
        }, (e, info) => {
            console.log(e);
            console.log(info);
            res.send('Email enviando com sucesso');
        });
    }
}
exports.MailController = MailController;

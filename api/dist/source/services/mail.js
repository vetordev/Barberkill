"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const mailer = require("nodemailer");
dotenv.config();
exports.transport = mailer.createTransport({
    host: process.env.HOST_MAILER,
    port: Number(process.env.PORT_MAILER),
    auth: {
        user: process.env.USER_MAILER,
        pass: process.env.PASS_MAILER
    }
});

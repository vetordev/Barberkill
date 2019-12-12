"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const mailer = require("nodemailer");
dotenv.config();
exports.transport = mailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
        user: "apikey",
        pass: "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"
    }
});

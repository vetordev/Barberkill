import * as dotenv from 'dotenv';
import * as mailer from 'nodemailer'
dotenv.config();

export const transport = mailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: "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"
  }
})



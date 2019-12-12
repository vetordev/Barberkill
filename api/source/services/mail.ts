import * as dotenv from 'dotenv';
import * as mailer from 'nodemailer'
dotenv.config();

export const transport = mailer.createTransport({
  host: process.env.HOST_MAILER,
  port: Number(process.env.PORT_MAILER),//587,
  auth: {
    user: process.env.USER_MAILER,
    pass: process.env.PASS_MAILER
  }
})



import { Wechaty } from "wechaty";
import autoAnswer from './autoAnswer/autoAnswer'
import tecentAuto from "./autoAnswer/tecentAuto";

const bot = new Wechaty()
bot.on('scan',    (qrcode, status) => console.log(['https://api.qrserver.com/v1/create-qr-code/?data=',encodeURIComponent(qrcode),'&size=220x220&margin=20',].join('')))
bot.on('login',   user => console.log(`User ${user} logined`))
bot.start()
bot.on('message', tecentAuto)
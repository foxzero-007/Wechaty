import {
    Contact,
    Message,
    Wechaty,
    config,
  }           from 'wechaty' // from 'wechaty'
  
  import { FileBox }  from 'file-box'
  import { generate } from 'qrcode-terminal'
  
export default async function autoAnswer(msg:Message) {
    console.log(msg.toString())

  if (msg.age() > 60) {
    console.log('Message discarded because its TOO OLD(than 1 minute)')
    return
  }

  if (  !/^(ding|ping|bing|code)$/i.test(msg.text())
      /*&& !msg.self()*/
  ) {
    console.log('Message discarded because it does not match ding/ping/bing/code')
    return
  }

  /**
   * 1. reply 'dong'
   */
  await msg.say('dong')
  console.log('REPLY: dong')
    
}
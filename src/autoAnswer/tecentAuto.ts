// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
import { Message } from "wechaty";
import globalState from "../state";
import PRIMARY_CONFIG from "../../config/config"

const tencentcloud = require("tencentcloud-sdk-nodejs");

const TbpClient = tencentcloud.tbp.v20190627.Client;

const clientConfig = {
  credential: {
    secretId: PRIMARY_CONFIG.SECRET_ID,
    secretKey: PRIMARY_CONFIG.SECRET_KEY,
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "tbp.tencentcloudapi.com",
    },
  },
};

const client = new TbpClient(clientConfig);
export default async function tecentAuto(msg:Message) {
  console.log(msg.toString())
  const params = {
    "BotId": PRIMARY_CONFIG.BOT_ID,
    "BotEnv": "dev",
    "TerminalId": PRIMARY_CONFIG.TERMINAL_ID,
    "InputText": msg.text()
};
if(msg.self()&&msg.text()==='start'){
  globalState.start()
  msg.say("腾讯聊天助手已启动")
}else if(msg.self()&&msg.text()==='close'){
  globalState.close()
  msg.say("腾讯聊天助手已关闭")
}
  if(!msg.self()&&!msg.room()&&globalState.autoAnswer){
    client.TextProcess(params).then(
      (data: any) => {
        msg.say(data.ResponseText)
      },
      (err: any) => {
        console.error("error", err);
      }
    ); 
  } 
}

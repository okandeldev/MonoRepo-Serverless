require('custom-env').env();
const {processRecivedMessage} = require('../src/infrastructure/utils/chatBot-message-manager') 
export class ChatAPIController {
  constructor({ chatBotService, mongoDao}) { 
    this.chatBotService = chatBotService;
    this.mongoDao = mongoDao;
  } 
  
  webhook = async (req, res) => {
    const data =   req.body; 
    await this.mongoDao.insertOne("chatbotAPI", data); 
    for (let i in data.messages) {
      await this.handleMessage(data.messages[i])
    }
    res.send({
      statusCode: 200,
      data: data,
    })
  }

   handleMessage = async (message) => {
    const author = message.author; //ex. 17472822486@c.us 
    const mobile = author.replace("@c.us", "");
    const body = message.body;
    const chatId = message.chatId;
    const senderName = message.senderName;
    if(message.fromMe)return; 
    if((new Date(0)).setUTCSeconds(message.time+(60*10)) < new Date())return;
    if (!(mobile.indexOf("01016080491") > -1 || mobile.indexOf("123") > -1))return;

    let chatSessionData = await this.chatBotService.getAuthorChatBotSessionData(chatId,author,mobile);
    
    await this.mongoDao.insertOne("chatbotAPI", {chatId,author,mobile,chatSessionData}); 
    chatSessionData = chatSessionData ||  {chatId:chatId}   
    const updatedChatSessionData = await processRecivedMessage(body,chatSessionData); 
    // chatSessionData = updatedChatSessionData || chatSessionData
    await this.chatBotService.updateAuthorChatBotSessionData(author,updatedChatSessionData?.chatSessionData); 
     
    
    await this.mongoDao.insertOne("chatbotAPI", updatedChatSessionData); 
  }

}
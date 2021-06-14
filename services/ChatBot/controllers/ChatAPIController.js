require('custom-env').env();
const {processRecivedMessage} = require('../src/infrastructure/utils/chatBot-message-manager')
const {invokeLambda} = require('../../../libs/serverless/invokeLambda')  
export class ChatAPIController {
  constructor({ chatBotService}) { 
    this.chatBotService = chatBotService;
  } 
  
  async webhook(req, res) {
  
    const data =   req.body; 
    for (let i in data.messages) { 
        const author = data.messages[i].author; //ex. 17472822486@c.us
        const mobile = author.replace("@c.us", "");
        const body = data.messages[i].body;
        const chatId = data.messages[i].id;
        const senderName = data.messages[i].senderName;
        if(data.messages[i].fromMe)return; 
  
        let chatSessionData = await this.chatBotService.getAuthorChatBotSessionData(chatId,author,mobile);
        chatSessionData = chatSessionData || {stepNo:2,chatId:chatId}
        const updatedChatSessionData = await processRecivedMessage(body,chatSessionData); 
        chatSessionData = updatedChatSessionData || chatSessionData
        console.log('updateAuthorChatBotSessionData',author,chatSessionData);
        await this.chatBotService.updateAuthorChatBotSessionData(author,chatSessionData); 
    } 
    res.send({
      statusCode: 200,
      body: data,
    }) 
  }
}
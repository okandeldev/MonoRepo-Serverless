require('custom-env').env();    
const app = require('express')();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const chatBotMessageHandler = require('../utils/chatBot-message-manager')
    
class ChatAPIController {
  constructor({ mongoDao}) { 
    this.mongoDao = mongoDao;
    this.chatBotService = chatBotService;
  }
  async webhook(req, res) {
    const data = req.body;  
    for (let i in data.messages) { 
        const author = data.messages[i].author;
        const mobile = ''; // extract mobile from author ;
        const body = data.messages[i].body;
        const chatId = data.messages[i].chatId;
        const senderName = data.messages[i].senderName;
        if(data.messages[i].fromMe)return; 
  
        let chatSessionData = await this.chatBotService.getAuthorChatBotSessionData(author,mobile);
        chatSessionData = chatSessionData || {stepNo:2}
        chatSessionData = await chatBotMessageHandler(body,chatSessionData); 
        await this.updateAuthorChatBotSessionData(author,chatSessionData); 
    }
    res.send('Ok');   
  };
}

module.exports.handler = async (event,res) => {
  const handler = new ChatAPIController();
  return await handler.webhook(event,res);
};

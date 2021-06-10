const checkNewMessageReceived = require('./checkNewMessageReceived')
const newMessage_VerifyProductName = require('./newMessage_VerifyProductName')

// Each Function
// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
var functions = {  
    checkNewMessageReceived,
    newMessage_VerifyProductName, 
}
module.exports = functions;
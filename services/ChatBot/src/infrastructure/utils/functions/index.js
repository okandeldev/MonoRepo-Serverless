import {checkNewMessageReceived} from './checkNewMessageReceived'
import {newMessage_VerifyProductName} from './newMessage_VerifyProductName'

// Each Function
// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export {  
    checkNewMessageReceived,
    newMessage_VerifyProductName, 
}
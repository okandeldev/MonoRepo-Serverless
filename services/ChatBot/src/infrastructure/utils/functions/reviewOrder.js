const {getChatConfig} = require('../chatBot-message-manager')
const container = require('../../config/di-setup')

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function verifyCartItemNote (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    
    let replyMessageParameters = {} 
    const chatBotService = container.resolve("chatBotService");

    if (recivedChatTextMessage == '1'){
        // Create Request
        await chatBotService.checkoutPhamarcyUserCart(user.id)  
        return {
            nextStepChatConfig:{key:'P_chatbot_confirmOrder'},
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            }
        } 
    }else 
    {
        //Edit Cart Products 
        return {
            nextStepChatConfig: {key:'P_chatbot_editProducts'},
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            }
        } 

    } 
};
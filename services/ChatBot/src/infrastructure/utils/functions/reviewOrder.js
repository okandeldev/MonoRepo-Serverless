const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function reviewOrder (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    
    let replyMessageParameters = {} 
    const chatBotService = container.resolve("chatBotService");
    console.log('reviewOrder',recivedChatTextMessage,chatSessionData);
    if (recivedChatTextMessage == '1'){
        // Create Request 
        const nextStepChatConfig = getChatConfig({key:'P_chatbot_confirmOrder'}) 
        await chatBotService.checkoutPhamarcyUserCart(user.id)  
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            }
        } 
    }else 
    {
        const nextStepChatConfig = getChatConfig({key:'P_chatbot_editProducts'}) 
        //Edit Cart Products 
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            }
        } 

    } 
};
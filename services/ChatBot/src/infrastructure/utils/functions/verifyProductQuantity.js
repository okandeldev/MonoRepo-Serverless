const {getChatConfig} = require('../chatBot-message-manager')
const container = require('../../config/di-setup')

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function verifyProductQuantity (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    
    let replyMessageParameters = {}
    const chatBotService = container.resolve("chatBotService");
    const isValidNumber = parseInt(recivedChatTextMessage) >= 0
    const enteredQuantity = parseInt(recivedChatTextMessage)
    if (!isValidNumber){
        return {
            nextStepChatConfig: {key:'P_chatbot_verifyNumber_InvalidNumber'},
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        }
    }else 
    {
        if (enteredQuantity ==0){ 
            // remove from Cart
            let {productVariantId} = chatSessionData.cartItem;
            await chatBotService.RemovePhamarcyUserCartItem(user.id,productVariantId)
            chatSessionData.cartItem = null; 
            return {
                nextStepChatConfig: {key:'P_chatbot_enterNewProductName'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            }
        }else{
            // Add Notes to CartItem
            chatSessionData.cartItem = {...chatSessionData.cartItem, quantity: enteredQuantity} 
            return {
                nextStepChatConfig: {key:'P_chatbot_enterNotes'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            }

        } 
    } 
};
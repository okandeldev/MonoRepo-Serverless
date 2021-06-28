const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function verifyCartNote (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    
    let replyMessageParameters = {}
    const chatBotService = container.resolve("chatBotService");
     
    // Add Notes to Cart
    await chatBotService.SavePhamarcyUserCart(user.Cart.id,recivedChatTextMessage)
    const cart = await chatBotService.getPhamarcyUserCart(user.id)
    replyMessageParameters['products'] = cart.CartItems.map((item)=> `${item.quantity} ${item.productName} \n`).join('')
     

    const nextStepChatConfig = getChatConfig({key:'P_chatbot_reviewOrder'}) 
    return {
        nextStepChatConfig,
        replyMessageParameters,
        chatSessionData:{
            ...chatSessionData,
            stepNo:nextStepChatConfig.stepNo
        }
    }
    
};
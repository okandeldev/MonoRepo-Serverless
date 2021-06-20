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
    // Add Notes to Cart
    await chatBotService.SavePhamarcyUserCartNote(user.id,recivedChatTextMessage)
    const cart = await chatBotService.getPhamarcyUserCart(user.id)
    replyMessageParameters['products'] = cart.CartItems.map((item)=> + `${item.quantity} ${item.productName} \n`).join('')
     
    return {
        nextStepChatConfig: {key:'P_chatbot_reviewOrder'},
        replyMessageParameters,
        chatSessionData:{
            ...chatSessionData,
            stepNo:nextStepChatConfig.stepNo
        }
    }
    
};
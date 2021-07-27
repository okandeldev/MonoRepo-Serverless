const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'
import { constants } from '../../config/constants'

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
     
    const RejectionList = [...constants.ChatRecievedMessage.Reject];
    let isRejection =  RejectionList.some((rx) => new RegExp(rx, 'i').test(recivedChatTextMessage));  
    if (!isRejection) {  // Add Notes to Cart
        recivedChatTextMessage=""
    }
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
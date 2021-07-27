const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function verifyProductQuantity (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData}
    const chatBotService = container.resolve("chatBotService");
    const cart = await chatBotService.getPhamarcyUserCart(user.id)
    
    let replyMessageParameters = {} 
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
        if (enteredQuantity == 0){ 
            // remove from Cart
            const {productVariantId} = chatSessionData.cartItem;
            const cartItem = cart.CartItems.filter(x=> x.productVariantId == productVariantId); 
            if (cartItem.length >0){   
                await chatBotService.RemovePhamarcyUserCartItem(cartItem[0].id)
            }
        }else{ 
            if (chatSessionData.cartItem) {
                const {productVariantId, productName, note} = chatSessionData.cartItem 
                const res = await chatBotService.AddPhamarcyUserCartItem(user.id,productVariantId, productName, enteredQuantity, note)
                
            } 
        }
        chatSessionData.cartItem = null;  
        const nextStepChatConfig = getChatConfig({key:'P_chatbot_enterNewProductName'})
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
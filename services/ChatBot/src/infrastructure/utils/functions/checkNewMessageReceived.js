const {getChatConfig} = require('../utils/chatBot-message-manager')
const container = require('../../../libs/infrastructure/config/di-setup')


// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
module.exports = async function (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData}  
    const pharmacy_name = user.Pharmacy.name;
    const requestsCount = user.requestsCount;
    const cartItemsCount = user.cartItemsCount;
    let replyMessageParameters = {pharmacy_name}
    
    //Has order but no draft
    if (requestsCount > 0  && cartItemsCount ==0 ){
        const nextStepChatConfig = getChatConfig('P_chatbot_hasOrderNoDraft') 
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        }
    }
    //No order and no draft
    else  if (requestsCount ==0   && cartItemsCount ==0 ){ 
        const nextStepChatConfig = getChatConfig('P_chatbot_noOrderNoDraft') 
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        } 
    }
    //No order but has draft
    else  if (requestsCount ==0   && cartItemsCount > 0 ){  
        const cartService = container.resolve("cartService");     
        const cart = cartService.getPhamarcyUserCart(user.id)
        
        const nextStepChatConfig = getChatConfig('P_chatbot_noOrderButHasDraft')  
        replyMessageParameters['products'] = cart.cartItems.map((item)=> item.name + '<br/>')
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        } 
    }  
     
    return chatData;
};
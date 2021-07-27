const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'
import { constants } from '../../config/constants'


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

    const ProcessProductsToRequestList = constants.ChatRecievedMessage.ProcessProductsToRequest;
    let isProcess =  ProcessProductsToRequestList.some((rx) => new RegExp(rx, 'i').test(recivedChatTextMessage))  
    
    const EditCartProductsList = constants.ChatRecievedMessage.EditCartProducts;
    let isEditCartProducts =  EditCartProductsList.some((rx) => new RegExp(rx, 'i').test(recivedChatTextMessage));
 
    if (isProcess) { 
        // Create Request 
        const nextStepChatConfig = getChatConfig({key:'P_chatbot_confirmOrder'}) 
        await chatBotService.checkoutPhamarcyUserCart(user.id)  
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo,
                clearChatSessionData:true 
            }
        } 
    }else if (isEditCartProducts)
    {
        const nextStepChatConfig = getChatConfig({key:'P_chatbot_editProducts'}) 
        //Edit Cart Products 
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo,
                isEditing:true
            }
        } 

    } 
};
const {getChatConfig} = require('../utils/chatBot-message-manager') 
const container = require('../../config/di-setup')
const {invokeLambda} = require('../src/infrastructure/serverless/invokeLambda')
// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
module.exports = async function (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    
    let replyMessageParameters = {}
    const chatBotService = container.resolve("chatBotService"); 
    const {matchedProduct,suggestedProducts} = chatBotService.SearchProductsAndSuggestions(recivedChatTextMessage)
    const cart = chatBotService.getPhamarcyUserCart(user.id)
      
    if (matchedProduct){
        //TODO: check product variant
        const productAlreadyAdded = cart.cartItems.filter((c)=>c.id == matchedProduct.id)[0]
        //Already Added
        if(productAlreadyAdded){
            const nextStepChatConfig = getChatConfig('P_chatbot_verifyProductName_ValidNameAndExistsInOrder')
            replyMessageParameters['products_count'] = productAlreadyAdded.quantity
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
            const nextStepChatConfig = getChatConfig('P_chatbot_verifyProductName_ValidNameButNotExistsInOrder') 
            return {
                nextStepChatConfig,
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            }
        } 
    }
    //Name Matches suggested Products
    else  if (!matchedProduct   && suggestedProducts.length >0 ){ 
        replyMessageParameters['products'] = suggestedProducts.map((item)=> item.name + '<br/>')
        const nextStepChatConfig = getChatConfig('P_chatbot_verifyProductName_NameWithManyProducts') 
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        } 
    }
    //Invalid Name
    else { 
        const nextStepChatConfig = getChatConfig('P_chatbot_verifyProductName_InvalidName')   
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
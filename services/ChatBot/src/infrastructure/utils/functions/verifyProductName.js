const {getChatConfig} = require('../chatBot-message-manager')
const container = require('../../config/di-setup')

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function newMessage_VerifyProductName (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    const cart = chatBotService.getPhamarcyUserCart(user.id)
    let replyMessageParameters = {}
    const chatBotService = container.resolve("chatBotService"); 

    
    //TODO: match all cases of No
    if (recivedChatTextMessage === 'No'){
        if (chatSessionData.cartItem){  
            let {productVariantId,quantity} = chatSessionData.cartItem
            await chatBotService.AddPhamarcyUserCartItem(user.id,productVariantId,quantity)
            chatSessionData.cartItem = null 
            return {
                nextStepChatConfig: {key:'P_chatbot_enterNotes'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            }  
        }
        //Invalid Name
        else {
            chatSessionData.cartItem = null 
            return {
                nextStepChatConfig: {key:'P_chatbot_verifyProductName_InvalidName'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            } 
        } 
    } else {
        const {matchedProduct,suggestedProducts} = chatBotService.SearchProductsAndSuggestions(recivedChatTextMessage) 
      
        if (matchedProduct){
            //TODO: check product variant
            const productAlreadyAdded = cart.cartItems.filter((c)=>c.productVarientId == matchedProduct.productVarientId)[0]
            //Already Added
            if(productAlreadyAdded){ 
                let {cartId, productVarientId, quantity, note} = productAlreadyAdded
                chatSessionData.cartItem = {cartId, productVarientId, quantity, note} 
                replyMessageParameters['products_count'] = quantity
                return {
                    nextStepChatConfig: {key:'P_chatbot_verifyProductName_ValidNameAndExistsInOrder'},
                    replyMessageParameters,
                    chatSessionData:{
                        ...chatSessionData,
                        stepNo:nextStepChatConfig.stepNo
                    } 
                }
            }else 
            {            
                chatSessionData.cartItem = { productVarientId:matchedProduct.productVarientId, quantity:1, note:''}
                return {
                    nextStepChatConfig: {key:'P_chatbot_verifyProductName_ValidNameButNotExistsInOrder'},
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
            chatSessionData.cartItem = null 
            return {
                nextStepChatConfig: {key:'P_chatbot_verifyProductName_NameWithManyProducts'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            } 
        }
        //Invalid Name
        else { 
            chatSessionData.cartItem = null 
            return {
                nextStepChatConfig: {key:'P_chatbot_verifyProductName_InvalidName'},
                replyMessageParameters,
                chatSessionData:{
                    ...chatSessionData,
                    stepNo:nextStepChatConfig.stepNo
                } 
            } 
        } 
    } 
};
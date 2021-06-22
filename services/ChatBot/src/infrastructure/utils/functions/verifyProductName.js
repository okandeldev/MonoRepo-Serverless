const {getChatConfig} = require('../chatBot-message-manager')
import { container, setup } from '../../config/di-setup'
import { constants } from '../../config/constants'

// Params  :  recivedChatTextMessage , chatSessionData
// returns :  {
//    nextStepChatConfig =  Chat Step Config
//    replyMessageParameters =  Reply Chat Message Parameters
//    chatSessionData =  Update chatSessionData with next step
//  }
export async function verifyProductName (recivedChatTextMessage,chatSessionData) {
    const {user ,chatId} = {...chatSessionData} 
    const cart = chatBotService.getPhamarcyUserCart(user.id)
    let replyMessageParameters = {}
    const chatBotService = container.resolve("chatBotService"); 
 
    const RejectionList = constants.ChatRecievedMessage.Reject.map((x)=> `/${x}/i`);
    let isRejection =  RejectionList.some(function(rx) { return rx.test(recivedChatTextMessage); }); 
    if (isRejection) {
        if (chatSessionData.cartItem){  
            let {productVariantId,quantity} = chatSessionData.cartItem
            await chatBotService.AddPhamarcyUserCartItem(user.id,productVariantId,quantity)
            chatSessionData.cartItem = null
            const nextStepChatConfig = getChatConfig({key:'P_chatbot_enterNotes'})
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
            chatSessionData.cartItem = null
            const nextStepChatConfig = getChatConfig({key:'P_chatbot_verifyProductName_InvalidName'})
            return {
                nextStepChatConfig,
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
            const productAlreadyAdded = cart.cartItems.filter((c)=>
            matchedProduct.ProductVariants.some(function(v) { return v.id == c.productVariantId  }))

            //Already Added
            if(productAlreadyAdded){ 
                let {cartId, productVariantId, quantity, note} = productAlreadyAdded
                chatSessionData.cartItem = {cartId, productVariantId, quantity, note} 
                replyMessageParameters['products_count'] = quantity
                const nextStepChatConfig = getChatConfig({key:'P_chatbot_verifyProductName_ValidNameAndExistsInOrder'})
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
                chatSessionData.cartItem = { productVariantId:matchedProduct.productVariantId, quantity:1, note:''}
                const nextStepChatConfig = getChatConfig({key:'P_chatbot_verifyProductName_ValidNameButNotExistsInOrder'})
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
            chatSessionData.cartItem = null
            const nextStepChatConfig = getChatConfig({key:'P_chatbot_verifyProductName_NameWithManyProducts'})
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
            chatSessionData.cartItem = null
            const nextStepChatConfig = getChatConfig({key:'P_chatbot_verifyProductName_InvalidName'})
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
};
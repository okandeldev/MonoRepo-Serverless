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
    const chatBotService = container.resolve("chatBotService"); 
    const cart = await chatBotService.getPhamarcyUserCart(user.id)
    let replyMessageParameters = {} 
 
    const RejectionList = [...constants.ChatRecievedMessage.Accept,...constants.ChatRecievedMessage.Accept];
    let isRejection =  RejectionList.some((rx) => new RegExp(rx, 'i').test(recivedChatTextMessage));  
    if (isRejection) { 
        let nextStepChatConfig;  
        const cart = await chatBotService.getPhamarcyUserCart(user.id) 
        if ((chatSessionData.isEditing)){ 
            replyMessageParameters['products'] = cart.CartItems.map((item)=> `${item.quantity} ${item.productName} \n`).join('')
           
            nextStepChatConfig= getChatConfig({key: 'P_chatbot_reviewOrder'})
            if (chatSessionData.cartItem){
                chatSessionData.cartItem = null 
            }

        }
         else if (cart?.CartItems.length ==0 ){
            nextStepChatConfig= getChatConfig({key: 'P_chatbot_enterNewProductName'})
        }   
        else { 
            nextStepChatConfig= getChatConfig({key: 'P_chatbot_enterNotes'})
        }
        return {
            nextStepChatConfig,
            replyMessageParameters,
            chatSessionData:{
                ...chatSessionData,
                stepNo:nextStepChatConfig.stepNo
            } 
        }  
    } else {
        const search = await chatBotService.SearchProductsAndSuggestions(recivedChatTextMessage) 
        const {matchedProduct,suggestedProducts} =  search 
        if (matchedProduct) {  
            const productAlreadyAdded = (cart?.CartItems || []).filter((c)=>
            matchedProduct.ProductVariants.some((v) => v.id == c.productVariantId))
            
            //Already Added
            if(productAlreadyAdded.length>0){ 
                let {cartId, productVariantId, quantity, note} = productAlreadyAdded[0]
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
                var productVariantId = matchedProduct.ProductVariants[0].id
                const productName =  matchedProduct.name
                chatSessionData.cartItem = { productVariantId, productName, quantity:1, note:''}
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
        else  if (!matchedProduct   && suggestedProducts?.length >0 ){ 
            replyMessageParameters['products'] = suggestedProducts.map((item)=> item.name + ' \n')
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
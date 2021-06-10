// const {getChatConfig} = require('../utils/chatBot-message-manager')
// const container = require('../../../libs/infrastructure/config/di-setup')

// // Each Function
// // Params  :  recivedChatTextMessage , chatSessionData
// // returns :  {
// //    nextStepChatConfig =  Chat Step Config
// //    replyMessageParameters =  Reply Chat Message Parameters
// //    chatSessionData =  Update chatSessionData with next step
// //  }
// var functions = {  
//     checkNewMessageReceived: async function (recivedChatTextMessage,chatSessionData) {
//         const {user ,chatId} = {...chatSessionData}  
//         const pharmacy_name = user.Pharmacy.name;
//         const requestsCount = user.requestsCount;
//         const cartItemsCount = user.cartItemsCount;
//         let replyMessageParameters = {pharmacy_name}
        
//         //Has order but no draft
//         if (requestsCount > 0  && cartItemsCount ==0 ){
//             const nextStepChatConfig = getChatConfig('P_chatbot_hasOrderNoDraft') 
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             }
//         }
//         //No order and no draft
//         else  if (requestsCount ==0   && cartItemsCount ==0 ){ 
//             const nextStepChatConfig = getChatConfig('P_chatbot_noOrderNoDraft') 
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             } 
//         }
//         //No order but has draft
//         else  if (requestsCount ==0   && cartItemsCount > 0 ){ 
//             const nextStepChatConfig = getChatConfig('P_chatbot_noOrderButHasDraft')  
//             replyMessageParameters['products'] = user.cartItems.map((item)=> item.name + '<br/>')
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             } 
//         }  
         
//         return chatData;
//     },
//     newMessage_VerifyProductName: async function (recivedChatTextMessage,chatSessionData) {
//         const {user ,chatId} = {...chatSessionData}  
//         const pharmacy_name = user.Pharmacy.name;
//         const requestsCount = user.requestsCount;
//         const cartItemsCount = user.cartItemsCount;
//         let replyMessageParameters = {pharmacy_name}
        
//         //Has order but no draft
//         if (requestsCount > 0  && cartItemsCount ==0 ){
//             const nextStepChatConfig = getChatConfig('P_chatbot_hasOrderNoDraft') 
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             }
//         }
//         //No order and no draft
//         else  if (requestsCount ==0   && cartItemsCount ==0 ){ 
//             const nextStepChatConfig = getChatConfig('P_chatbot_noOrderNoDraft') 
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             } 
//         }
//         //No order but has draft
//         else  if (requestsCount ==0   && cartItemsCount > 0 ){ 
//             const nextStepChatConfig = getChatConfig('P_chatbot_noOrderButHasDraft')  
//             replyMessageParameters['products'] = user.cartItems.map((item)=> item.name + '<br/>')
//             return {
//                 nextStepChatConfig,
//                 replyMessageParameters,
//                 chatSessionData:{
//                     ...chatSessionData,
//                     stepNo:nextStepChatConfig.stepNo
//                 } 
//             } 
//         }  
         
//         return chatData;
//     },
//     newMessage_VerifyProductName: async function (productName,chatSessionData) {
//         let chatData = {...chatSessionData}
//         const { chatId } = chatData;

        
//         const productService = container.resolve("productService");  
//         const products = await productService.findAll({keyword:productName})  
//         const cart = await apiPharmacyUserCart()  

//         const filtered = products.filter((x)=> x.name == productName);
//         const addedToProduct = chatData.products.filter((x)=> x.name == productName);
//         const alreadyAdded = addedToProduct.length >0 || cart.filter((x)=> x.name == productName).length >0;
        
//         if (filtered.length == 0)
//         {  
//             // step : product not found 
//             const {message,fn} = chatConfig('Invalid product name') 
//             await apiChatSendMessage('message', {chatId: chatId, body: message});  
//             chatData.lastAction = "enterProductName" 
  
//       }else  if (filtered.length == 1)
//       {  
//         if (alreadyAdded) {  
//             const {message,fn} = chatConfig('Product name valid and exists in the order') 
//             await apiChatSendMessage('message', {chatId: chatId, body: message});  
//             //   const text = `You already added ${addedToProduct[0].count} item(s) of ${addedToProduct[0].name} to product list.
//             //   How many items would you like to order? To delete product from list please enter 0 `;
//             //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
//             //   chatData.lastProductEntered = addedToProduct[0].name;
//             chatData.product = {name:addedToProduct[0].name, count:1}  
//             chatData.lastProductEntered = addedToProduct[0].name;
//         } else { 
//             const {message,fn} = chatConfig('Product name valid but not exists in the order') 
//             await apiChatSendMessage('message', {chatId: chatId, body: message});
//             //   const text = `How many items of  ${filtered[0].name}  do you need?`;
//             //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
//             chatData.product = {name:filtered[0].name, count:1}  
//             chatData.lastProductEntered = filtered[0].name;
//         } 
//         chatData.lastAction = "checkProductQuantity";

//     }else  if (filtered.length > 1){
//          // step : product  suggestions 
//          let productsStr = "";
//          filtered.forEach(function(p) {
//            productsStr = productsStr + `${p.name} 
//            `;
//          })  
//          const {message,fn} = chatConfig('Product name matches many products') 
//          await apiChatSendMessage('message', {chatId: chatId, body: message});
//         chatData.lastAction = "enterProductName" 
          
//         }
//         return chatData;
//     } 
// }
// module.exports = functions;
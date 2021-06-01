require('custom-env').env();  
const { container } = require('./infrastructure/config/di-setup');
const constants = require('../../../libs/infrastructure/config/constants');

const { apiPharmacyUserCart} = require("../../helper/api");
const {apiChatSendMessage} = require("./third-party/chat-api");
const  chatbotPharmacyConfig = require("../config/chat/pharmacy.json");

const localization = require('./translations'); 
const myLocalize = localization.myLocalize; 



const commonChatBotMessageParam ={ 
    ...constants.urls,

    //modifiable
    pharmacy_name:"",
    order_code:"",
    order_cost:"",
    products:"", 
} 

function getChatConfig ({...key,stepNo}){
    const res = chatbotPharmacyConfig.
    filter((x)=> (!key && x.message.key == key)
    && (!key && x.stepNo == stepNo))
    if (res.length == 1){
        return res[0]
    }
    throw (`${systemName} chat Configuration is not defined`)
}

function initiateChatMessageWithParameters(languageCode,{message}){
    myLocalize.setLocale(languageCode || constants.defaultLanguage.isoCode);
    const {key,params} = message
    let mappedParams = {}
    for (let index = 0; index < params.length; index++) {
        const param = array[index];
        mappedParams[param] = commonChatBotMessageParam[param]
    }
    return myLocalize.translate(key, {...mappedParams}) 
}
const functions = { 
    notRegistered: async function (msg,chatSessionData) {

    },
    checkNewMessageReceived: async function (msg,chatSessionData) {
        const {mobile,user} = {...chatSessionData}
        const { chatId } = chatData; 
        if (!user)
        {
            //Not Registed
            const {message,fn} = getChatConfig({key:'Not registered'}) 
            await apiChatSendMessage('message', {chatId: chatId, body: message});

        }
        else if (user.type== 'pharmacyUser'){
            const pharmacy_name = user.Pharmacy.name;

            //Has order but no draft
            const {message,fn} = getChatConfig('Has order but no draft') 
            const {message,fn} = getChatConfig({key:'Not registered'}) 
            await apiChatSendMessage('message', {chatId: chatId, body: message});

            //No order and no draft
            const {message,fn} = getChatConfig('No order and no draft') 
            const {message,fn} = getChatConfig({key:'Not registered'}) 
            await apiChatSendMessage('message', {chatId: chatId, body: message});

            //No order but has draft
            const {message,fn} = getChatConfig('No order but has draft')  
            const {message,fn} = getChatConfig({key:'Not registered'}) 
            const contact_url = "";
            const create_order_url = "";
            const track_order_url = "";
            const products =  
            message = myLocalize.translate(message, pharmacy_name,contact_url,create_order_url,track_order_url,products)
            await apiChatSendMessage('message', {chatId: chatId, body: message});
  

            // const cart = user.Cart//await apiPharmacyUserCart()  
            // const request = user.Requests
            // if (filtered.length == 0)
            // {  
            //     // step : product not found 
            //     const {message,fn} = getChatConfig('Invalid product name') 
            //     await apiChatSendMessage('message', {chatId: chatId, body: message});  
            //     chatData.lastAction = "enterProductName" 

            // }else  if (filtered.length == 1)
            // {  
            //     if (alreadyAdded) {  
            //         const {message,fn} = getChatConfig('Product name valid and exists in the order') 
            //         await apiChatSendMessage('message', {chatId: chatId, body: message});  
            //         //   const text = `You already added ${addedToProduct[0].count} item(s) of ${addedToProduct[0].name} to product list.
            //         //   How many items would you like to order? To delete product from list please enter 0 `;
            //         //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
            //         //   chatData.lastProductEntered = addedToProduct[0].name;
            //         chatData.product = {name:addedToProduct[0].name, count:1}  
            //         chatData.lastProductEntered = addedToProduct[0].name;
            //     } else { 
            //         const {message,fn} = getChatConfig('Product name valid but not exists in the order') 
            //         await apiChatSendMessage('message', {chatId: chatId, body: message});
            //         //   const text = `How many items of  ${filtered[0].name}  do you need?`;
            //         //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
            //         chatData.product = {name:filtered[0].name, count:1}  
            //         chatData.lastProductEntered = filtered[0].name;
            //     } 
            //     chatData.lastAction = "checkProductQuantity";

            // }else  if (filtered.length > 1){
            //     // step : product  suggestions 
            //     let productsStr = "";
            //     filtered.forEach(function(p) {
            //     productsStr = productsStr + `${p.name} 
            //     `;
            //     })  
            //     const {message,fn} = getChatConfig('Product name matches many products') 
            //     await apiChatSendMessage('message', {chatId: chatId, body: message});
            //     chatData.lastAction = "enterProductName" 
                
            // }
        }else  if (user.type== 'supplierUser'){

        }
        
        return chatData;
    },
    newMessage_VerifyProductName: async function (productName,chatSessionData) {
        let chatData = {...chatSessionData}
        const { chatId } = chatData;

        
        const productService =   container.resolve("productService");  
        const products = await productService.findAll({keyword:productName})  
        const cart = await apiPharmacyUserCart()  

        const filtered = products.filter((x)=> x.name == productName);
        const addedToProduct = chatData.products.filter((x)=> x.name == productName);
        const alreadyAdded = addedToProduct.length >0 || cart.filter((x)=> x.name == productName).length >0;
        
        if (filtered.length == 0)
        {  
            // step : product not found 
            const {message,fn} = chatConfig('Invalid product name') 
            await apiChatSendMessage('message', {chatId: chatId, body: message});  
            chatData.lastAction = "enterProductName" 
  
      }else  if (filtered.length == 1)
      {  
        if (alreadyAdded) {  
            const {message,fn} = chatConfig('Product name valid and exists in the order') 
            await apiChatSendMessage('message', {chatId: chatId, body: message});  
            //   const text = `You already added ${addedToProduct[0].count} item(s) of ${addedToProduct[0].name} to product list.
            //   How many items would you like to order? To delete product from list please enter 0 `;
            //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
            //   chatData.lastProductEntered = addedToProduct[0].name;
            chatData.product = {name:addedToProduct[0].name, count:1}  
            chatData.lastProductEntered = addedToProduct[0].name;
        } else { 
            const {message,fn} = chatConfig('Product name valid but not exists in the order') 
            await apiChatSendMessage('message', {chatId: chatId, body: message});
            //   const text = `How many items of  ${filtered[0].name}  do you need?`;
            //   await apiChatSendMessage('message', {chatId: chatId, body: text});  
            chatData.product = {name:filtered[0].name, count:1}  
            chatData.lastProductEntered = filtered[0].name;
        } 
        chatData.lastAction = "checkProductQuantity";

    }else  if (filtered.length > 1){
         // step : product  suggestions 
         let productsStr = "";
         filtered.forEach(function(p) {
           productsStr = productsStr + `${p.name} 
           `;
         })  
         const {message,fn} = chatConfig('Product name matches many products') 
         await apiChatSendMessage('message', {chatId: chatId, body: message});
        chatData.lastAction = "enterProductName" 
          
        }
        return chatData;
    } 
}
module.exports = async function (chatMessage,chatSessionData){
    const { chatId , languageCode } = chatSessionData; 
    const chatConfig = getChatConfig({stepNo:chatSessionData.stepNo})
    const {fn} = chatConfig
    if (functions[fn]){ 
        const chatSessionDataOutput = await functions[fn](chatMessage,chatSessionData)
        return chatSessionDataOutput;
    }else
    {   
        const chatMessage = initiateChatMessageWithParameters(languageCode,chatConfig)
        await apiChatSendMessage('message', {chatId: chatId, body: chatMessage});
    }
};
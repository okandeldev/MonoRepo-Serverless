require('custom-env').env();   
const {constants} = require('../config/constants'); 
const functions = require('./functions/index');
const {apiChatSendMessage} = require("./third-party/chat-api");
const  chatbotPharmacyConfig = require("../config/chat-functions/pharmacy.json");

const {localization} = require('./translations');  
  
// common Chat-Bot Message Params
let commonChatBotMessageParam ={ 
    ...constants.urls,

    //modifiable
    pharmacy_name:"",
    order_code:"",
    order_cost:"",
    products:"", 
} 
 
//initiate ChatMessage With Parameters
// Params  :   languageCode, Chat Step Configuration Message
// returns :   Chat text message
function initiateChatTextMessageWithParameters(languageCode,{message},otherMessageParam={}){
    localization.setLocale(languageCode || constants.defaultLanguage.isoCode);
    const {key,params} = message
    let mappedParams = []
    for (let index = 0; index < params.length; index++) {
        const param = params[index];
        mappedParams.push(commonChatBotMessageParam[param] || otherMessageParam[param])
    } 
    console.log('params', params);
    console.log('mappedParams', mappedParams);
    return localization.translate(key, ...mappedParams) 
}

// search Chat Config Json
// Params  :   key = Message Identifier,stepNo
// returns :  Pharmacy/Supplier User Object
export function getChatConfig({key,stepNo}){ 
    const res = chatbotPharmacyConfig.filter((x)=> {
        let match = false;
        if ((key || stepNo))
        {
            if (key)
            {
                match = match || (x.message.key == key)
            }
            if (stepNo)
            {
                match = match || (x.stepNo == stepNo)
            }
        }
        return match 
    })
    if (res.length == 1){
        return res[0]
    }
    throw (`key:${key} or stepNo:${stepNo} chat Configuration is not defined`)
} 

// analyze chat text message, match chatConfig  and excute chatConfig function 
// Params  :   recivedChatTextMessage, chatSessionData
// returns :  chatSessionData for the next step
export let processRecivedMessage = async function (recivedChatTextMessage,chatSessionData){
    let chatConfig 
    if (!chatSessionData) { 
        chatConfig = getChatConfig({key: 'P_chatbot_notRegistered'}) 
    } else {
        const { chatId , stepNo, languageCode } = chatSessionData;  
        chatConfig = getChatConfig({stepNo:stepNo})
    }
    if (chatConfig)
    {
        const {fn} = chatConfig 
        console.log('selected chat Config fn',fn);
        if (functions[fn] && functions[fn] != ""){ 
            const chatSessionDataOutput = await functions[fn](recivedChatTextMessage,chatSessionData)
            if (chatSessionDataOutput?.nextStepChatConfig){  
                const nextStepChatConfig = getChatConfig(chatSessionDataOutput?.nextStepChatConfig)
                const chatReplyTextMessage = initiateChatTextMessageWithParameters(languageCode, nextStepChatConfig , chatSessionDataOutput.replyMessageParameters)
                await apiChatSendMessage('message', {chatId: chatId, body: chatReplyTextMessage}); 
            }
            return chatSessionDataOutput;
        } else
        {  
            const chatReplyTextMessage = initiateChatTextMessageWithParameters(languageCode, chatConfig)
            await apiChatSendMessage('message', {chatId: chatId, body: chatReplyTextMessage});
            return null;
        }
    }
    
};
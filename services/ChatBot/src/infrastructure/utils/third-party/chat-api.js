require('custom-env').env(); 
const axios = require('axios')
const {config} = require("../../third-party/chat-api");
const token = config.token;
const apiUrl = config.apiUrl;  

//post chat-api message to client  
export let apiChatSendMessage = async function (method, params){
  console.log('apiChatSendMessage',method, params); 
  const url = `${apiUrl}/${method}?token=${token}`;
  
  console.log('apiChatSendMessage',{apiUrl,method, params,token});
  console.log('apiChatSendMessage',apiChatSendMessage123);
  axios
  .post(url, params)
  .then(res => { 
    console.log('apiChatSendMessage result', res)
  })
  .catch(error => {
    console.error('apiChatSendMessage result',error)
  })
} 
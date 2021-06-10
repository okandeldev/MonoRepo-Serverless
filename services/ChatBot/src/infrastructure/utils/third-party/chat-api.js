require('custom-env').env(); 
const {config} = require("../../third-party/chat-api");
const token = config.token;
const apiUrl = config.apiUrl;
import * as fetch from "node-fetch"  

//post chat-api message to client  
export let apiChatSendMessage = async function (method, params){
  console.log('apiChatSendMessage',method, params);
  // const options = {};
  // options['method'] = "POST";
  // options['body'] = JSON.stringify(params);
  // options['headers'] = { 'Content-Type': 'application/json' };
  
  // const url = `${apiUrl}/${method}?token=${token}`; 
  
  // const apiResponse = await fetch(url, options);
  // const jsonResponse = await apiResponse.json();
  // return jsonResponse;
} 
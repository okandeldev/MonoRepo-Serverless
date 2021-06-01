require('custom-env').env(); 
const config = require("../../config/config-chatAPI");
const token = config.token, apiUrl = config.apiUrl;
const fetch = require('node-fetch');
  
module.exports.apiChatSendMessage = async function (method, params){
  const options = {};
  options['method'] = "POST";
  options['body'] = JSON.stringify(params);
  options['headers'] = { 'Content-Type': 'application/json' };
  
  const url = `${apiUrl}/${method}?token=${token}`; 
  
  const apiResponse = await fetch(url, options);
  const jsonResponse = await apiResponse.json();
  return jsonResponse;
}
s
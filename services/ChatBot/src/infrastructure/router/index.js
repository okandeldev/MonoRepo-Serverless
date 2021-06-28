const { container, setup } = require('../config/di-setup'); 
const ChatAPIController = container.resolve('ChatAPIController');    
 
export let routers = function (app) { 
  app.post("/webhook",(req, res) => { 
    ChatAPIController.webhook(req, res)
  }); 
};

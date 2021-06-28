const { container, setup } = require('../config/di-setup'); 
const ChatAPIController = container.resolve('ChatAPIController');    
 
export let routers = function (app) { 
  app.post("/",(req, res) => { 
    ChatAPIController.webhook(req, res)
  }); 
};

const awilix = require('awilix'); 

import { ChatAPIController } from "../../../controllers/ChatAPIController"
import { chatBotService } from "../../use_cases/chatBotService" 
const mongoDao = require('../../../../../libs/orm/mongo');
 
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
}); 

/*
  Setup & configure Dependency Injection
*/
function setup() {
  container.register({  
    ChatAPIController: awilix.asClass(ChatAPIController), 
    // services
    chatBotService: awilix.asClass(chatBotService),  
    // DAO
    mongoDao: awilix.asValue(mongoDao), 
  });
}

export {
  container,
  setup,
};
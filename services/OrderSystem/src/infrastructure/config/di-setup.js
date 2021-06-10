const awilix = require('awilix'); 

import { CartController } from "../../../controllers/CartController" 
import { UserController } from "../../../controllers/UserController"

import { userService } from "../../use_cases/userService"
import { cartService } from "../../use_cases/cartService"

import { pharmacyUserRepository } from "../../persistence/repositories/pharmacyUserRepository"
import { supplierUserRepository } from "../../persistence/repositories/supplierUserRepository" 
import { orderRepository } from "../../persistence/repositories/orderRepository"
import { cartRepository } from "../../persistence/repositories/cartRepository"
import * as db2 from "../../persistence/orm/sequalize/model/index"  
const mongoDao = require('../../../../../libs/orm/mongo');
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
}); 

/*
  Setup & configure Dependency Injection
*/
function setup() { 
  container.register({ 
    CartController: awilix.asClass(CartController), 
    UserController: awilix.asClass(UserController),
    // services  
    userService: awilix.asClass(userService),
    cartService: awilix.asClass(cartService),
    
    // repository  
    pharmacyUserRepository: awilix.asClass(pharmacyUserRepository),
    supplierUserRepository: awilix.asClass(supplierUserRepository),
    orderRepository: awilix.asClass(orderRepository),
    cartRepository: awilix.asClass(cartRepository),

    // inject object with database connection pooling
    db2: awilix.asValue(db2.default),  
    // DAO
    mongoDao: awilix.asValue(mongoDao), 
  });
}

export {
  container,
  setup,
};
const awilix = require('awilix'); 

//controllers
import { CartController } from "../../../controllers/CartController" 
import { CartItemController } from "../../../controllers/CartItemController"
import { UserController } from "../../../controllers/UserController"

//services
import { userService } from "../../use_cases/userService"
import { cartService } from "../../use_cases/cartService"
import { cartItemService } from "../../use_cases/cartItemService"

//repositories
import { pharmacyUserRepository } from "../../persistence/repositories/pharmacyUserRepository"
import { supplierUserRepository } from "../../persistence/repositories/supplierUserRepository" 
import { orderRepository } from "../../persistence/repositories/orderRepository"
import { cartRepository } from "../../persistence/repositories/cartRepository"
import { cartItemRepository } from "../../persistence/repositories/cartItemRepository"
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
    //controllers
    CartController: awilix.asClass(CartController),
    CartItemController: awilix.asClass(CartItemController),
    UserController: awilix.asClass(UserController),
    // services  
    userService: awilix.asClass(userService),
    cartService: awilix.asClass(cartService),
    cartItemService: awilix.asClass(cartItemService),

    // repository  
    pharmacyUserRepository: awilix.asClass(pharmacyUserRepository),
    supplierUserRepository: awilix.asClass(supplierUserRepository),
    orderRepository: awilix.asClass(orderRepository),
    cartRepository: awilix.asClass(cartRepository),
    cartItemRepository: awilix.asClass(cartItemRepository),

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
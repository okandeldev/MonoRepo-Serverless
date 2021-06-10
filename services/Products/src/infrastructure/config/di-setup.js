const awilix = require('awilix'); 

import { ProductController } from "../../../controllers/ProductController"
import { productService } from "../../use_cases/productService" 
import { productRepository } from "../../persistence/repositories/productRepository" 
import * as db1 from "../../persistence/orm/sequalize/model/index"  
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
}); 

/*
  Setup & configure Dependency Injection
*/
function setup() { 
  container.register({ 
    ProductController: awilix.asClass(ProductController),
    // services
    productService: awilix.asClass(productService), 
    productRepository: awilix.asClass(productRepository), 

    // inject object with database connection pooling
    db1: awilix.asValue(db1.default), 
  });
}

export {
  container,
  setup,
};
const awilix = require('awilix');

//controllers
import { ProductController } from "../../../controllers/ProductController"
import { ProductVariantController } from "../../../controllers/ProductVariantController"
//services
import { productService } from "../../use_cases/productService"
import { productVariantService } from "../../use_cases/productVariantService"
//repositories
import { productRepository } from "../../persistence/repositories/productRepository"
import { productVariantRepository } from "../../persistence/repositories/productVariantRepository"
import * as db1 from "../../persistence/orm/sequalize/model/index"
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

/*
  Setup & configure Dependency Injection
*/
function setup() {
  container.register({
    //controllers
    ProductController: awilix.asClass(ProductController),
    ProductVariantController: awilix.asClass(ProductVariantController),
    // services
    productService: awilix.asClass(productService),
    productVariantService: awilix.asClass(productVariantService),
    //repositories
    productRepository: awilix.asClass(productRepository),
    productVariantRepository: awilix.asClass(productVariantRepository),

    // inject object with database connection pooling
    db1: awilix.asValue(db1.default),
  });
}

export {
  container,
  setup,
};
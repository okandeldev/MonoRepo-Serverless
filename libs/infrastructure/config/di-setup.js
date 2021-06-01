const awilix = require('awilix');
const HomeController = require('../../../services/ChatBot/web/controller/HomeController'); 
const ApiProductController = require('../../../services/ChatBot/web/controller/api/ProductController'); 
const ApiCartController = require('../../../services/ChatBot/web/controller/api/CartController');  

const ProductService = require('../../use_cases/productService'); 
const OrderRepository = require('../../../libs/persistence/repositories/orderRepository');
const ProductRepository = require('../../../libs/persistence/repositories/productRepository');
const db1 = require('../../persistence/orm/sequalize/model/db1/index');
const db2 = require('../../persistence/orm/sequalize/model/db2/index');
const mongoDao = require('../../persistence/orm/mongo/mongoose/mongo');
 
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
}); 

/*
  Setup & configure Dependency Injection
*/
function setup() {
  container.register({
    homeController: awilix.asClass(HomeController), 
    apiProductController: awilix.asClass(ApiProductController), 
    apiCartController: awilix.asClass(ApiCartController), 
    // services
    productService: awilix.asClass(ProductService),
    orderRepository: awilix.asClass(OrderRepository),
    productRepository: awilix.asClass(ProductRepository),

    // DAO
    mongoDao: awilix.asValue(mongoDao),

    // inject object with database connection pooling 
    db1: awilix.asValue(db1),
    db2: awilix.asValue(db2),
  });
}

module.exports = {
  container,
  setup,
};
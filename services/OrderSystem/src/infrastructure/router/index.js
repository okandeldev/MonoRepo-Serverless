// const path = require("path"); 
const { container, setup } = require('../config/di-setup'); 
const UserController = container.resolve('UserController'); 
const CartController = container.resolve('CartController');    
  
export let routers = function (app) { 
  app.get("/user", (req, res) => { 
    UserController.getUsersByPhone(req, res)
  }); 
  app.get("/user/cart", (req, res) => { 
    CartController.getPhamarcyUserCart(req, res)
  });  
};
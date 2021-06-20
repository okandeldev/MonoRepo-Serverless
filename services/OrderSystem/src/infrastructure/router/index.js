// const path = require("path"); 
const { container, setup } = require('../config/di-setup');
const UserController = container.resolve('UserController');
const CartController = container.resolve('CartController');
const CartItemController = container.resolve('CartItemController');

export let routers = function (app) {
  app.get("/user", (req, res) => {
    UserController.getUsersByPhone(req, res)
  });
  app.get("/user/cart", (req, res) => {
    CartController.getPhamarcyUserCart(req, res)
  });
  app.post("/user/cart/item", (req, res) => {
    CartItemController.createCartItem(req, res)
  });
  app.delete("/user/cart/item", (req, res) => {
    CartItemController.deleteCartItem(req, res)
  });
};
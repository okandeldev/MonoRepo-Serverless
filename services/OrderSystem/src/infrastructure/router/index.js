// const path = require("path"); 
const { container, setup } = require('../config/di-setup');
const UserController = container.resolve('UserController');
const CartController = container.resolve('CartController');
const CartItemController = container.resolve('CartItemController');

export let routers = function (app) {
  app.get("/api/user", (req, res) => {
    UserController.getUsersByPhone(req, res)
  });
  app.get("/api/user/cart", (req, res) => {
    CartController.getPhamarcyUserCart(req, res)
  });
  app.post("/api/user/cart", (req, res) => {
    CartController.updateCart(req, res)
  });
  app.post("/api/user/cart/checkout", (req, res) => {
    CartController.checkout(req, res)
  });
  app.post("/api/user/cart/item", (req, res) => {
    CartItemController.createCartItem(req, res)
  });
  app.delete("/api/user/cart/item/:id", (req, res) => {
    CartItemController.deleteCartItem(req, res)
  });
};
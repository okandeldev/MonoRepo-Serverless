'use strict';
 
const {Op, TableHints} = require("sequelize");
const cartRepository = require('../../domain/repository/cartRepository');
const cart = require('../../domain/entity/cart');   
/*
Implenetation Class for base Cart Repository
*/
module.exports = class extends cartRepository {

  constructor({db2}) {
    super();
    this.db2 = db2;
    this.Cart = this.db2.Cart;
    this.CartItem = this.db2.CartItem;
  } 

  //get Pharmacy User Cart & Items
  async getPhamarcyUserCart(pharmacyUserId) { 
    const phamarcyUserCart = await this.Cart.findAll({
      where: {
        pharmacyUserId: pharmacyUserId
      },
      include: [{
        as: "cartItem",
        model: TableHints.CartItem
      }],
    })
    let cartObj = new cart(phamarcyUserCart.id,...phamarcyUserCart)
    cartObj.cartItems = phamarcyUserCart.cartItems;
    return cartObj; 
  } 

};

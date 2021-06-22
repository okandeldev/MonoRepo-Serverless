import {cartItem} from "../../domain/entity/cartItem";

const {Op, TableHints} = require("sequelize");
import { cartRepository  as cartRepositoryBase} from "../../domain/repository/cartRepository"
import { cart } from "../../domain/entity/cart"  
/*
Implenetation Class for base Cart Repository
*/
export class cartRepository extends cartRepositoryBase {

  constructor({db2}) {
    super();
    this.db2 = db2;
    this.Cart = this.db2.Cart;
    this.CartItem = this.db2.CartItem;
  } 

  //get Pharmacy User Cart & Items
  async getPhamarcyUserCart(pharmacyUserId) { 
    const res = await this.Cart.findOne({
      where: {
        pharmacyUserId: pharmacyUserId
      },
      include: [{
        model: this.db2.CartItem,
        as: 'CartItems'
      }],
    })
    if (!res){
      return null;
    }
    let cartObj = new cart(res.id,res) 
    cartObj.CartItems = res.CartItems;
    return cartObj; 
  }

  //create cart
  async createCart(cartData) {
    const res = await this.Cart.create({...cartData})
    if (!res) {
      return null;
    }
    return new cart(res.id, res);
  }

  //update cart
  async updateCart(cartData) {
    const cart_exist = await this.Cart.findOne({
      where: {id: cartData.id},
      include: [{
        model: this.db2.CartItem,
        as: 'CartItems'
      }],
    });
    if (!cart_exist) {
      return null
    }
    await this.Cart.update({...cartData}, {where: {id: cartData.id}})
    let updated_cart = new cart(cartData.id, cartData);
    updated_cart.CartItems = cart_exist.CartItems
    return updated_cart;
  }
}

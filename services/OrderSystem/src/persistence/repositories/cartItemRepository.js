const {Op, TableHints} = require("sequelize");
import {cartItemRepository as cartItemRepositoryBase} from "../../domain/repository/cartItemRepository"
import {cartItem} from "../../domain/entity/cartItem"

/*
Implementation Class for base CartItem Repository
*/
export class cartItemRepository extends cartItemRepositoryBase {

  constructor({db2}) {
    super();
    this.db2 = db2;
    this.CartItem = this.db2.CartItem;
  }

  //create cart item
  async createCartItem(cartItemData) {
    const res = await this.CartItem.create({...cartItemData})
    if (!res) {
      return null;
    }
    return new cartItem(res.id, res);
  }

  //update cart item
  async updateCartItem(id, cartItemData) {
    const res = await this.CartItem.update({...cartItemData}, {where: {id: id}})
    if (!res) {
      return null;
    }
    return new cartItem(res.id, res);
  }

  //delete cart item
  async deleteCartItem(id) {
    const res = await this.CartItem.destroy({where: {id: id}});
    if (!res) {
      return null;
    }
    return new cartItem(res.id, res);
  }

}

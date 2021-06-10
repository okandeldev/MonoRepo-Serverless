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
    const res = await this.Cart.findAll({
      where: {
        pharmacyUserId: pharmacyUserId
      },
      include: [{
        model: this.db2.CartItem,
        as: 'CartItems'
      }],
    })
    return res.map((item)=>{
      let cartObj = new cart(item.id,item) 
      cartObj.cartItems = item.CartItems;
      return cartObj; 
    }) 
  } 

};

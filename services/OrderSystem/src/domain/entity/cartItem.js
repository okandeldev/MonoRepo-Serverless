require('custom-env').env();
import { base } from "./base"
   
export class cartItem extends base{ 
  constructor(id = null, {cartId, productVarientId, quantity, note}) {
    super()
    this.id = id;  
    this.cartId = cartId; 
    this.productVarientId = productVarientId; 
    this.quantity = quantity; 
    this.note = note;
  } 
   
}; 
require('custom-env').env();
import { base } from "./base"
   
export class cartItem extends base{ 
  constructor(id = null, {cartId, productVariantId, productName, quantity, note}) {
    super()
    this.id = id;  
    this.cartId = cartId; 
    this.productVariantId = productVariantId;
    this.productName = productName;
    this.quantity = quantity; 
    this.note = note;
  } 
   
}; 
require('custom-env').env();  
import { base } from "./base" 
import { cartItem } from "./cartItem" 
   
export class cart extends base{ 
  constructor(id = null, {pharmacyUserId,note}) {
    super()
    this.id = id; 
    this.pharmacyUserId = pharmacyUserId; 
    this.note = note;
  } 
  
  // List of Cart Items
  #cartItems = [];
  get CartItems () { 
    return this.#cartItems;
  } 
  set CartItems (value) { 
    this.#cartItems = value.map((item)=>{
      let cartItemObj = new cartItem(item.id,item)
      return cartItemObj
    });
  }

  // Cart Items Count 
  get CartItemsCount () { 
    return this.#cartItems.length;
  } 
 
}; 
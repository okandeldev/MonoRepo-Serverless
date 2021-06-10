require('custom-env').env();   
   
export class cart { 
  constructor(id = null, {pharmacyUserId,note}) {
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
    this.#cartItems = [...value];
  }

  // Cart Items Count 
  get CartItemsCount () { 
    return this.#cartItems.length;
  } 
}; 
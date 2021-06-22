require('custom-env').env();
import { base } from "./base"
import { cart } from "./cart"
import { request } from "./request"
   
export class pharmacyUser extends base{

  constructor(id , {pharmacyId, userName, email, password, mobile, active}) {
    super()
    this.id = id;
    this.pharmacyId = pharmacyId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.active = active; 
  }

   // User Cart
   #cart = null;
   get Cart () { 
     return this.#cart;
   } 
   set Cart (value) {
     if (value) {
      let cartObj = new cart(value.id,value)
      cartObj.CartItems = value.CartItems;
      this.#cart = cartObj;
    }
   }

   // Cart Items Count 
  get CartItemsCount () { 
    return this.#cart?.CartItems?.length || 0;
  }  

  #request = {};
  get Request () { 
    return this.#request;
  } 
  set Request (value) { 
    // let requestObj = new request(value.id,value) 
    // this.#request = requestObj;
  }

  // Requests Count
  #requestsCount = 0;
  get RequestsCount () { 
    return this.#requestsCount;
  } 
}; 
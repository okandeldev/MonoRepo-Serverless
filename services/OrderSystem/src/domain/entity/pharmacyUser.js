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

  #requests = [];
  get Requests () { 
    return this.#requests;
  } 
  set Requests (value) { 
    let requestObjs = (value)? value.map(r => new request(r.id,r)):[]
    this.#requests = requestObjs;
  }

  // Requests Count
  #requestsCount = 0;
  get RequestsCount () { 
    return this.#requests?.length || 0;
  } 
}; 
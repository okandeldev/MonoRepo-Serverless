require('custom-env').env();   
   
export class pharmacyUser{

  constructor(id , {pharmacyId, userName, email, password, mobile, active}) {
    this.id = id;
    this.pharmacyId = pharmacyId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.active = active; 
  }

   // User Cart
   #cart = {};
   get Cart () { 
     return this.#cart;
   } 
   set Cart (value) { 
     this.#cart = {...value};
   }

   // Cart Items Count 
  get CartItemsCount () { 
    return this.#cart.CartItems.length;
  }  

  #request = {};
  get Request () { 
    return this.#request;
  } 
  set Request (value) { 
    this.#request = {...value};
  }

  // Requests Count
  #requestsCount = 0;
  get RequestsCount () { 
    return this.#requestsCount;
  }

}; 
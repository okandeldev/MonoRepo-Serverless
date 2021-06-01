require('custom-env').env();   
   
module.exports = class {

  constructor(id = null, {pharmacyId, userName, email, password, mobile, active}) {
    this.id = id;
    this.pharmacyId = pharmacyId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.active = active; 
  }

   // List of Cart Items
   #cartItems = [];
   get cartItems () { 
     return this.#cartItems;
   } 
   set cartItems (value) { 
     this.#cartItem = [...value];
   }

}; 
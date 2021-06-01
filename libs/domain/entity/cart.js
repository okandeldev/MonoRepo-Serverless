require('custom-env').env();   
   
module.exports = class {

  constructor(id = null, {pharmacyUserId,note}) {
    this.id = id; 
    this.pharmacyUserId = pharmacyUserId; 
    this.note = note;
  }

  // Cart Items Count
  #cartItemsCount = 0;
  get cartItemsCount () { 
    return this.#cartItemsCount;
  } 
  set cartItemsCount (value) { 
    this.#cartItemsCount = value;
  }

  // Requests Count
  #requestsCount = 0;
  get requestsCount () { 
    return this.#requestsCount;
  } 
  set requestsCount (value) { 
    this.#requestsCount = value;
  }

}; 
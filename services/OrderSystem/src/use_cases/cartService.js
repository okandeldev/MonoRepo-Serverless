require('custom-env').env();   
   
export class cartService {
  constructor({ cartRepository}) { 
    this.cartRepository = cartRepository; 
  } 

   //get PhamarcyUser Cart Items
  // Params  :  pharmacyUserId
  // returns :  cart & cart Items Object
  async getPhamarcyUserCart(pharmacyUserId) {
    const cart = await this.cartRepository.getPhamarcyUserCart(pharmacyUserId); 
     return cart;
  } 

  //checkout
  // Params  :  pharmacyUserId
  // returns :  request Object
  async checkout(pharmacyUserId) {
    const cart = await this.cartRepository.getPhamarcyUserCart(pharmacyUserId);  
  }

  async updateCart(cartData) {
      return await this.cartRepository.updateCart(cartData)
  }

}  
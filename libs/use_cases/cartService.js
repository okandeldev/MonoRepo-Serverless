require('custom-env').env();   
   
class cartService {
  constructor({ cartRepository}) { 
    this.cartRepository = cartRepository; 
  } 
  //checkout
  // Params  :  pharmacyUserId
  // returns :  request Object
  async checkout(pharmacyUserId) {
    const cart = await this.cartRepository.getPhamarcyUserCart(pharmacyUserId);  
  }   

} 
module.exports = cartService;  
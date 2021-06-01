 
/*
Abstract class for cart Repository
*/
class cartRepository { 
  async getPhamarcyUserCart(pharmacyUserId) { 
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }  
} 

module.exports = cartRepository;  
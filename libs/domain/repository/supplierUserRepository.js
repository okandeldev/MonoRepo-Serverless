
/*
Abstract class for cart Supplier User Repository
*/
class supplierUserRepository { 
   
  async getUserByPhone(mobile) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED'); 
  }  
} 

module.exports = supplierUserRepository;  
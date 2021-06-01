
/*
Abstract class for Pharmacy User Repository
*/
class pharmacyUserRepository { 
   
  async getUserByPhoneIncludeCartAndRequest(mobile) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED'); 
  }  
} 

module.exports = pharmacyUserRepository;  
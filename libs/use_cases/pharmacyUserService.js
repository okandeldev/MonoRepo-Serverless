require('custom-env').env();   
   
class pharmacyUserService {
  constructor({ pharmacyUserRepository}) { 
    this.pharmacyUserRepository = pharmacyUserRepository; 
  }
    
} 
module.exports = pharmacyUserService;  
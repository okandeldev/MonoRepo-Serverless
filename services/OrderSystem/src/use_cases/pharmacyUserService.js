require('custom-env').env();   
   
export class pharmacyUserService {
  constructor({ pharmacyUserRepository}) { 
    this.pharmacyUserRepository = pharmacyUserRepository; 
  }
    
}
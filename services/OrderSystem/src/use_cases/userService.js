require('custom-env').env();     
const {constants} = require('../infrastructure/config/constants')
export class userService {
  constructor({ mongoDao,pharmacyUserRepository,supplierUserRepository}) { 
    this.mongoDao = mongoDao;
    this.pharmacyUserRepository = pharmacyUserRepository;
    this.supplierUserRepository = supplierUserRepository;
  }

  // Get User Pharmacy/Supplier
  // Params  :   mobile = user mobile
  // returns :  Pharmacy/Supplier User Object
  async getUserByPhone(mobile) { 
    const pharmacyUser = await this.pharmacyUserRepository.getUserByPhoneIncludeCartAndRequest(mobile);  
    if (pharmacyUser){
      pharmacyUser.type= constants.userType.pharmatcyUser  
      return pharmacyUser;
    }else {
      const supplierUser = await this.supplierUserRepository.getUserByPhone(mobile);
      if (supplierUser){
        supplierUser.type= constants.userType.supplierUser
      }
      return supplierUser; 
    }
  }
}  
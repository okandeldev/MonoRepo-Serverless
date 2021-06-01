require('custom-env').env();    
const chatBotSessionDataCollection = "chatBotSessionData"
const constants = require('../infrastructure/config/constants')
class chatBotService {
  constructor({ mongoDao,pharmacyUserRepository}) { 
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
      if (!supplierUser){
        supplierUser.type= constants.userType.supplierUser
      }
      return supplierUser; 
    }
  }
  
  // Get Chat Bot User Session Data
  // Params  :  author = user Identifier, mobile = user mobile
  // returns :  Chat Bot User Session Data Object
  async getAuthorChatBotSessionData(author,mobile) {  
    let chatData = await this.mongoDao.findOne(chatBotSessionDataCollection,{author:author});  
    if (!chatData){
      let user = await this.getUserByPhone(mobile)
      if(user){
        if (user.type == constants.userType.pharmatcyUser)
        {
          chatData = {
            pharmacyId: user.Pharmacy.id,
            pharmacyUserId:user.id,
            author:author,
            stepNo: 1,
            product:null,
            lastAction:null,
            userType:constants.userType.pharmatcyUser,
            user:user
          }
          await this.mongoDao.insertOne(chatData);
        }else if (user.type == constants.userType.supplierUser)
        {
          chatData = {
            supplierId:user.Supplier.id,
            supplierUserId:user.id,
            author:author, 
            stepNo: 1,
            lastAction:null,
            userType:constants.userType.supplierUser,
            user:user
          }
          await this.mongoDao.insertOne(chatData);
        }
      }
    } 
    return chatData; 
  } 

  // Update Chat Bot User Session Data
  // Params  :  author = user Identifier, data = session data 
  async updateAuthorChatBotSessionData(author,data) {  
    await this.mongoDao.findOneAndUpdate({author:author}, {$set: {
     ...data
    }}, {upsert: true}); 
  }  
} 
module.exports = chatBotService;
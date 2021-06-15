require('custom-env').env();     
const {constants} = require('../infrastructure/config/constants') 
const {invokeLambda} = require('../../../../libs/serverless/invokeLambda')

export class chatBotService {
  constructor({ mongoDao}) { 
    this.mongoDao = mongoDao; 
  }

  // Get User Pharmacy/Supplier
  // Params  :   mobile = user mobile
  // returns :  Pharmacy/Supplier User Object
  async getUserByPhone(mobile) {    
    const payload = { "mobile" : mobile }; 
    let result = await invokeLambda(constants.serverless.Services.OrderSystem,{
      endpoint:'/user',
      httpMethod:'GET',
      query:payload
    }); 
    const body = JSON.parse(JSON.parse(result.Payload).body)
    console.log('result user: ', body.user); 
    return body.user; 
  } 

  /*
    Products
  */
  async SearchProductsAndSuggestions(keyword) {
    const payload = `{ "keyword" : ${keyword} }`; 
    const result = await invokeLambda(constants.serverless.Services.Products,{
      endpoint:'/',
      httpMethod:'GET',
      query:payload
    }); 
    console.log('result: ', result); 
    return result; 
  }

  /*
    PharmacyUser Cart
  */
 async getPhamarcyUserCart(pharmacyUserId) { 
  const payload = `{ "pharmacyUserId" : ${pharmacyUserId} }`; 
  const result = await invokeLambda(constants.serverless.Services.OrderSystem,{
    endpoint:'/user',
    httpMethod:'GET',
    query:payload
  }); 
  console.log('result: ', result); 
  return result; 
} 

  // Get Chat Bot User Session Data
  // Params  :  author = user Identifier, mobile = user mobile
  // returns :  Chat Bot User Session Data Object
  async getAuthorChatBotSessionData(chatId,author,mobile) {  
    let chatData = await this.mongoDao.findOne(constants.mongoCollections.chatBotSession,{author:author});  
    if (!chatData){
      let user = await this.getUserByPhone(mobile)
      if(user){
        if (user.type == constants.userType.pharmatcyUser)
        {
          chatData = {
            pharmacyId: user.pharmacyId,
            pharmacyUserId:user.id,
            author:author,
            chatId:chatId,
            stepNo: 1,
            product:null,
            lastAction:null,
            userType:constants.userType.pharmatcyUser,
            user:user
          }
          await this.mongoDao.insertOne(constants.mongoCollections.chatBotSession,chatData);
        }else if (user.type == constants.userType.supplierUser)
        {
          chatData = {
            supplierId:user.supplierId,
            supplierUserId:user.id,
            author:author, 
            chatId:chatId,
            stepNo: 1,
            lastAction:null,
            userType:constants.userType.supplierUser,
            user:user
          }
          await this.mongoDao.insertOne(constants.mongoCollections.chatBotSession,chatData);
        }
      }
    } 
    chatData.chatId = chatId;
    return chatData; 
  } 

  // Update Chat Bot User Session Data
  // Params  :  author = user Identifier, data = session data 
  async updateAuthorChatBotSessionData(author,data) {  
    await this.mongoDao.findOneAndUpdate(constants.mongoCollections.chatBotSession,{author:author}, {$set: {
     ...data
    }}, {upsert: true}); 
  }

}
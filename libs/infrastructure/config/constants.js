require('custom-env').env(); 
const BASE_URL = process.env.DB2_NAME

// Global Constant variables
module.exports = {
  userType:{
      pharmatcyUser : 'pharmatcyUser',
      supplierUser : 'supplierUser',
  },
  defaultLanguage:{
    isoCode:"en-us",
    name:'English'
  },
  //Mongo Collection
  mongoCollections:{
    chatBotSession : 'chatBotSession' 
  },
  urls:{
    contacts_url: `${BASE_URL}/constactus`,
    track_order_url:`${BASE_URL}/trackorder`,
    offer_url:`${BASE_URL}/offer`,
    create_order_url:`${BASE_URL}/create_order`,
  }
};
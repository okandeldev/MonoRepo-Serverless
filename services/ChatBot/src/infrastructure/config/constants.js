require('custom-env').env(); 
const BASE_URL = process.env.BASE_URL

// Global Constant variables
export let constants = {
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
    contactus_url: `${BASE_URL}/constactus`,
    track_order_url:`${BASE_URL}/trackorder`,
    offer_url:`${BASE_URL}/offer`,
    create_order_url:`${BASE_URL}/create_order`,
  },
  serverless:{
    Services:{
      Products:"service-products-dev-app",
      OrderSystem:"service-ordersystem-dev-app"
    } 
  },
  ChatRecievedMessage:{
    Accept:['ok','yes','go','right', 'اوك','تمام','نعم'],
    Reject:['no','لأ','لا'],

    ProcessProductsToRequest:['1','ok','process' ,'confirm' ,'نفذ' ,'تنفيذ'],
    EditCartProducts:['2','edit','تعديل'],

  }
};
require('custom-env').env(); 
const BASE_URL = process.env.BASE_URL || 'localhost'

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
    requests: 'requests'
  },
  urls:{
    contactus_url: `${BASE_URL}/constactus`,
    track_order_url:`${BASE_URL}/trackorder`,
    offer_url:`${BASE_URL}/offer`,
    create_order_url:`${BASE_URL}/create_order`,
  }
};
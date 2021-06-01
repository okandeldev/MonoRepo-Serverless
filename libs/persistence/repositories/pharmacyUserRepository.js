'use strict';
 
const {Op, TableHints} = require("sequelize");
const pharmacyUserRepository  = require('../../domain/repository/pharmacyUserRepository'); 
const pharmacyUser = require('../../domain/entity/pharmacyUser');

/*
Implenetation Class for base Pharmacy User Repository
*/
module.exports = class extends pharmacyUserRepository  {

  constructor({db2}) {
    super();
    this.db2 = db2;
    this.Cart = this.db2.Cart;
    this.CartItem = this.db2.CartItem;
  }  
  
  // Get Pharmacy User
  // Params  :  mobile
  // returns :  Domin Pharmacy User && Cart Items Count && Requests Count
  async getUserByPhoneIncludeCartAndRequest(mobile) { 
      const PharmacyUser = this.db2.PharmacyUser; 
    
      var whereCondition = {}; 
      if (mobile) {
          whereCondition['mobile'] = mobile
          whereCondition['active'] = 1
      }else{
        whereCondition['id'] = 0
      }; 
    try {
      const res = await PharmacyUser.findOne({
        include: [{
          model: this.db2.Pharmacy
        },
        {
          model: this.db2.Cart,
          include: { 
            attributes: { 
                include: [[Sequelize.fn("COUNT", Sequelize.col("CartItems.id")), "cartItemsCount"]] 
            },
            model: this.db2.CartItem 
          }
        },
        { 
          attributes: { 
              include: [[Sequelize.fn("COUNT", Sequelize.col("requests.id")), "requestsCount"]] 
          },
          model: this.db2.Request,
          
        }
      ],
        where: whereCondition
      }); 
      let pharmacyUserObj = new pharmacyUser(res.id, ...res);
      pharmacyUserObj.cartItemsCount = res.cartItemsCount;
      pharmacyUserObj.requestsCount = res.requestsCount;
      return pharmacyUserObj;

    } catch (error) {
      throw(error)
    } 
  }  
};

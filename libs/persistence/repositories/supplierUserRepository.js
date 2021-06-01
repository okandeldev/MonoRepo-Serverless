'use strict';
 
const {Op, TableHints} = require("sequelize");
const supplierUserRepository  = require('../../domain/repository/supplierUserRepository');
const supplierUser = require('../../domain/entity/supplierUser');
/*
Implenetation Class for base Supplier User  Repository
*/
module.exports = class extends supplierUserRepository  {

  constructor({db2}) {
    super();
    this.db2 = db2; 
  } 
 
  // Get Supplier User
  // Params  :  mobile
  // returns :  Domin Supplier User
  async getUserByPhone(mobile) { 
      const SupplierUser = this.db2.SupplierUser; 
    
      var whereCondition = {}; 
      if (mobile) {
          whereCondition['mobile'] = mobile
          whereCondition['active'] = 1
      }else{
        whereCondition['id'] = 0
      }; 
    try {
      const res = await SupplierUser.findOne({
        include: [{
          model: db2.Supplier
        }
      ],
        where: whereCondition
      });
      return new supplierUser(res.id, ...res);
    } catch (error) {
      throw(error)
    } 
  }

};

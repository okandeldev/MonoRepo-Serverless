const Sequelize = require("sequelize");
const {Op, TableHints} = require("sequelize");
import { pharmacyUserRepository  as pharmacyUserRepositoryBase} from "../../domain/repository/pharmacyUserRepository"
import { pharmacyUser } from "../../domain/entity/pharmacyUser"
/*
Implenetation Class for base Pharmacy User Repository
*/
export class pharmacyUserRepository extends pharmacyUserRepositoryBase  {

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
          include: [{
            model: this.db2.CartItem,
            as: 'CartItems'
          }]
        },
        {
          model: this.db2.Request
        }],
        where: whereCondition
      }); 
      if (!res){
        return null;
      } 
      let pharmacyUserObj = new pharmacyUser(res.id, res); 
      pharmacyUserObj.Pharmacy = res.Pharmacy;
      pharmacyUserObj.Cart = res.Cart; 
      pharmacyUserObj.Requests = res.Requests;  
      return pharmacyUserObj;

    } catch (error) {
      throw(error)
    } 
  }  
};

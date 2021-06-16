const {Op, TableHints} = require("sequelize");
import { supplierUserRepository  as supplierUserRepositoryBase} from "../../domain/repository/supplierUserRepository"
import { supplierUser } from "../../domain/entity/supplierUser"
/*
Implenetation Class for base Supplier User  Repository
*/
export class supplierUserRepository extends supplierUserRepositoryBase  {

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
          model: this.db2.Supplier
        }
      ],
        where: whereCondition
      });
      if (!res){
        return null;
      }
      const supplierUserObj = new supplierUser(res.id, res)
      supplierUserObj.Supplier = res.Supplier; 
      return supplierUserObj;
    } catch (error) {
      throw(error)
    } 
  }

};

const {Op, TableHints} = require("sequelize");
import { orderRepository  as orderRepositoryBase} from "../../domain/repository/orderRepository"
import { order } from "../../domain/entity/order"   
/*
Implenetation Class for base Order Repository
*/
export class orderRepository extends orderRepositoryBase {

  constructor({db1}) {
    super();
    this.db1 = db1;
    this.Order = this.db1.Order;
  }
  
  //search Orders
  // params :  keyword
  async findAll(keyword) { 
    try { 
      await this.Order.findAll({
        where: {
          name: { 
            [Op.like]: `%${keyword}%`
          }
        }
      }).then(function (res) { 
        return res.map((item)=> new order(item.id,...item))
      })  
    } catch (error) {
        throw(error)
    }  
  }
  // Save Order 
  async save(domainOrder) { 
    await this.Order.update(domainOrder).then(function (res) { 
    });
  } 
  // Delete Order
  async delete(orderId) { 
    await this.Order.delete(orderId).then(function (res) {
      
    });
  } 
  
  // Get Order
  // returns :  Domain Order
  async get(orderId) {
    try {  
      const res = await this.Order.get(orderId) 
      return new order(res.id,...res)
    } catch (error) {
        throw error
    }
  }  

};

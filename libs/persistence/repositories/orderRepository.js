'use strict';
 
const orderRepository = require('../../domain/repository/orderRepository');
const order = require('../../domain/entity/order');  
/*
Implenetation Class for base Order Repository
*/
module.exports = class extends orderRepository {

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
  // returns :  Domin Order
  async get(orderId) {
    try {  
      const res = await this.Order.get(orderId) 
      return new order(res.id,...res)
    } catch (error) {
        
    }
  }  

};

'use strict';
 
const productRepository = require('../../domain/repository/productRepository'); 
const product = require('../../domain/entity/product');
/*
Implenetation Class for base Product Repository
*/
module.exports = class extends productRepository {

  constructor({db1}) {
    super();
    this.db1 = db1;
    this.Product = this.db1.Product;
  }
  
  //findAll Products
  async findAll(keyword) {
    try { 
      await this.Product.findAll({
        where: {
          name: { 
            [Op.like]: `%${keyword}%`
          }
        }
      }).then(function (res) { 
        return res.map((item)=> new product(item.id,...item))
      })
    } catch (error) {
      throw(error)
    }
  }
  async save(domainProduct) { 
    await this.Product.update(domainProduct).then(function (res) { 
    });
  } 
  async delete(productId) { 
    await this.Product.delete(productId).then(function (res) {
      
    });
  }

  async get(productId) {
    try {
      const res = await this.Product.get(productId)
      return new product(res.id,...res)
    } catch (error) {
      throw(error)
    } 
  }

};

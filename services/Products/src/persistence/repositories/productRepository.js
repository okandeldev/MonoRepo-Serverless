const {Op} = require("sequelize");
import { productRepository  as productRepositoryBase} from "../../domain/repository/productRepository"
import { product } from "../../domain/entity/product" 
/*
Implenetation Class for base Product Repository
*/
export class productRepository extends productRepositoryBase {

  constructor({db1}) { 
    super()
    this.db1 = db1;
    this.Product = this.db1.Product;
  }
  
  //findAll Products
  async findAll(keyword) { 
      const queryResult = await this.Product.findAll({
        where: {
          name: { 
            [Op.like]: `%${keyword}%`
          }
        }
      })
      return queryResult.map((item)=> new product(item.id,item)) 
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
 
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
      const res = await this.Product.findAll({
        where: {
          name: { 
            [Op.like]: `%${keyword}%`
          }
        },
        include: [{
          model: this.db1.ProductVariant,
          as: 'ProductVariants'
        }],
      })
      if (!res){
        return null;
      } 
      return res.map((item)=> {
        let productObj = new product(item.id,item) 
        productObj.ProductVariants = item.ProductVariants;
        return productObj; 
      })
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
 
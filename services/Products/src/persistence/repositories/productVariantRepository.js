const {Op} = require("sequelize");
import {productVariantRepository as productVariantRepositoryBase} from "../../domain/repository/productVariantRepository"
import {product} from "../../domain/entity/product"
import {productVariant} from "../../domain/entity/productVariant"

/*
Implementation Class for base ProductVariant Repository
*/
export class productVariantRepository extends productVariantRepositoryBase {

  constructor({db1}) {
    super()
    this.db1 = db1;
    this.Product = this.db1.Product;
    this.ProductVariant = this.db1.ProductVariant;
  }

  //get Variant Product
  async getProduct(productId) {
    const queryResult = await this.Product.findAll({
      where: {
        productId: productId
      }
    })
    return queryResult.map((item) => new product(item.id, item))
  }

}

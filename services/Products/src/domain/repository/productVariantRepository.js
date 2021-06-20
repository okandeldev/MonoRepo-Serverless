/*
Abstract class for ProductVariant Repository
*/
export class productVariantRepository {

  constructor() {
  }

  //get Variant Product
  async getProduct(productId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}
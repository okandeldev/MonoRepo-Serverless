/*
Abstract class for Product Repository
*/
export class productRepository {
 
  constructor() {
  }
  //get Products
  async findAll(keyword) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  save(domainProduct) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  delete(productId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(productId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}
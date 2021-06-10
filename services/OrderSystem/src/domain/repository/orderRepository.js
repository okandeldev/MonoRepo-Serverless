 /*
Abstract class for order Repository
*/
export class orderRepository {
 
  //findAll Orders
  async findAll(keyword) { 
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  save(domainOrder) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  } 
  delete(OrderId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(OrderId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }  
}
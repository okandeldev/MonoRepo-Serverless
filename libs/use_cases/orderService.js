require('custom-env').env();   
   
class orderService {
  constructor({ orderRepository}) { 
    this.orderRepository = orderRepository; 
  }
  
} 
module.exports = orderService;  
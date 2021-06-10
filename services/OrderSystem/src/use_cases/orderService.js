require('custom-env').env();   
   
export class orderService {
  constructor({ orderRepository}) { 
    this.orderRepository = orderRepository; 
  } 
}  
require('custom-env').env();   
   
class productService {
  constructor({ productRepository}) { 
    this.productRepository = productRepository; 
  }  
  
} 
module.exports = productService;  
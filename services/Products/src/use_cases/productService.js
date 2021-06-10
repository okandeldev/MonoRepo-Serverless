require('custom-env').env();

export class productService {
  constructor({ productRepository}) { 
    this.productRepository = productRepository; 
  }
  
  // Search Products And Suggestions with similarity
  // Params  :  keyword
  // returns :  {
  //    matchedProduct,
  //    suggestedProducts
  //  }
  async SearchProductsAndSuggestions(keyword) {
    let products = await this.productRepository.findAll(keyword); 
    let matchedProduct = products.filter((item) => item);  
    let suggestedProducts = products.filter((item) => item);
    return {
      matchedProduct,
      suggestedProducts
    }; 
  }

}
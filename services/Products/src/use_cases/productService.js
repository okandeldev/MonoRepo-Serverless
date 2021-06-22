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
    let products = await this.productRepository.findAll(keyword.trim());
    let matchedProduct = (products.length ==1)? [products[0]] : [];  
    let suggestedProducts = (products.length >1)? products : [];
      
    return {
      matchedProduct,
      suggestedProducts
    }; 
  }

}
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
    let products = await this.productRepository.findAll(keyword ? keyword.trim() : "");
    const ExcatProduct = (products.filter((p)=> p.name.toLowerCase() == keyword.trim().toLowerCase() && p.ProductVariants?.length >0))
    let matchedProduct = (ExcatProduct.length== 1)? ExcatProduct[0] : null;  
    let suggestedProducts = (ExcatProduct.length == 0)? products : [];
      
    return {
      matchedProduct,
      suggestedProducts
    }; 
  }

}
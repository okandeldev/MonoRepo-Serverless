require('custom-env').env();  
export class ProductController {
  constructor({ productService}) { 
    this.productService = productService; 
  }
  async getProductsAndSuggestions(req, res) {  
      const query = req.query;
      const keyword = query?.keyword;
      const products = await this.productService.SearchProductsAndSuggestions(keyword)
      
      res.send({
        statusCode: 200,
        body: products,
      })
  }
} 
require('custom-env').env();

export class productService {
  constructor({productVariantRepository}) {
    this.productVariantRepository = productVariantRepository;
  }

  async getVariantProduct(productId) {
    let product = await this.productVariantRepository.getProduct(productId);
    return {
      product,
    };
  }

}
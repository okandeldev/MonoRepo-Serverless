require('custom-env').env();

export class ProductVariantController {
  constructor({productVariantService}) {
    this.productVariantService = productVariantService;
  }

  async getVariantProduct(req, res) {
    const query = req.query;
    const productId = query?.productId;
    const product = await this.productVariantService.getVariantProduct(productId)

    res.send({
      statusCode: 200,
      data: product,
    })
  }
} 
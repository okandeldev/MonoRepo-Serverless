require('custom-env').env();

export class productVariant {

  constructor(id = null, {
    productId,
    variantId,
    localBarcode,
    internationalBarcode,
  }) {
    this.id = id;
    this.productId = productId;
    this.variantId = variantId;
    this.localBarcode = localBarcode;
    this.internationalBarcode = internationalBarcode;
  }
}
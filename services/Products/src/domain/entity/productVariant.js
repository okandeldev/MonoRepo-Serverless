require('custom-env').env();
import { base } from "./base"   
export class productVariant extends base {

  constructor(id = null, {
    productId,
    variantId,
    localBarcode,
    internationalBarcode,
  }) { 
    super()
    this.id = id;
    this.productId = productId;
    this.variantId = variantId;
    this.localBarcode = localBarcode;
    this.internationalBarcode = internationalBarcode;
  }
}
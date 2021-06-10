require('custom-env').env();   
   
export class order {

  constructor(id = null, {pharmacyUserId, supplierId, orderStatusId, orderTotal, purchasedOn, offerId, promotionId, requestId, total, productsCount}) {
    this.id = id;
    this.pharmacyUserId = pharmacyUserId;
    this.supplierId = supplierId;
    this.orderStatusId = orderStatusId;
    this.orderTotal = orderTotal;
    this.purchasedOn = purchasedOn;
    this.offerId = offerId;
    this.promotionId = promotionId;
    this.requestId = requestId;
    this.total = total;
    this.productsCount = productsCount; 
  }

}; 
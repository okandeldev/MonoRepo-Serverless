require('custom-env').env();
import { base } from "./base" 
   
export class request extends base{ 
  constructor(id = null, {pharmacyUserId, statusId, total, productsCount}) { 
    super()
    this.id = id; 
    this.pharmacyUserId = pharmacyUserId; 
    this.statusId = statusId;
    this.total = total;
    this.productsCount = productsCount; 
  }
 
}; 
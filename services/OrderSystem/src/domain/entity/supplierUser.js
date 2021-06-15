require('custom-env').env();
import { base } from "./base"  
   
export class supplierUser extends base{

  constructor(id = null, {supplierId, userName, email, password, mobile, active}) {
    super()
    this.id = id;
    this.supplierId = supplierId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.active = active; 
  }

}; 
require('custom-env').env();   
   
module.exports = class {

  constructor(id = null, {supplierId, userName, email, password, mobile, active}) {
    this.id = id;
    this.supplierId = supplierId;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.active = active; 
  }

}; 
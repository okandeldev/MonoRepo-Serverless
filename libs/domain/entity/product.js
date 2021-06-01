require('custom-env').env();   
   
module.exports = class {

  constructor(id = null, {name, description, boxSize, manufacturerId,concenteration,type,unit,price}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.boxSize = boxSize;
    this.manufacturerId = manufacturerId;
    this.concenteration = concenteration;
    this.type = type;
    this.unit = unit;
    this.price = price;
    this.isPriceEditable = isPriceEditable;
    this.scientificName = scientificName; 
  }

}; 
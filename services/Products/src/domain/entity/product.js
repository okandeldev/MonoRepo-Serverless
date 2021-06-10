require('custom-env').env();

export class product {

  constructor(id = null, {name, description, boxSize, manufacturerId,concenteration,type,unit,price,isPriceEditable,scientificName}) {
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
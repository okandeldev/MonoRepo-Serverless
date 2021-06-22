require('custom-env').env();
import { base } from "./base" 
import { productVariant } from "./productVariant" 
   
export class product extends base{

  constructor(id = null, {name, description, boxSize, manufacturerId,concenteration,type,unit,price,isPriceEditable,scientificName}) {
    super()
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
  
  // List of Cart Items
  #productVariants = [];
  get ProductVariants () { 
    return this.#productVariants;
  } 
  set ProductVariants (value) { 
    this.#productVariants = value.map((item)=>{
      let productVariantObj = new productVariant(item.id,item)
      return productVariantObj
    });
  }
}; 
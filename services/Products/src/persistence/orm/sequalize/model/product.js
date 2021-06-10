
export function Product (sequelize, DataTypes)   {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    boxSize: DataTypes.STRING,
    manufacturerId: DataTypes.INTEGER,
    concenteration: DataTypes.STRING,
    type: DataTypes.INTEGER,
    unit: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    isPriceEditable: DataTypes.INTEGER,
    scientificName: DataTypes.STRING 
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
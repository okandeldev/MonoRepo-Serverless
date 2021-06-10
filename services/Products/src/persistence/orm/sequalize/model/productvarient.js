export function ProductVarient (sequelize, DataTypes) {
  const ProductVarient = sequelize.define('ProductVarient', {
    productId: DataTypes.INTEGER,
    varientId: DataTypes.INTEGER,
    localBarcode: DataTypes.STRING,
    internationalBarcode: DataTypes.STRING
  }, {});
  ProductVarient.associate = function(models) {
    // associations can be defined here
  };
  return ProductVarient;
};
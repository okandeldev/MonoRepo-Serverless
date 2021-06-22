export function ProductVariant (sequelize, DataTypes) {
  const ProductVariant = sequelize.define('ProductVariant', {
    productId: DataTypes.INTEGER,
    variantId: DataTypes.INTEGER,
    localBarcode: DataTypes.STRING,
    internationalBarcode: DataTypes.STRING
  }, {});
  ProductVariant.associate = function(models) {
    // associations can be defined here
    ProductVariant.belongsTo(models.Product, {
      foreignKey: "productId"
    })
  };
  return ProductVariant;
};
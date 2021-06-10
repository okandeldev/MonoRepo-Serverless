export function PromotionProduct (sequelize, DataTypes) {
  const PromotionProduct = sequelize.define('PromotionProduct', {
    promotionId: DataTypes.INTEGER,
    productVarientId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  PromotionProduct.associate = function(models) {
    // associations can be defined here
  };
  return PromotionProduct;
};
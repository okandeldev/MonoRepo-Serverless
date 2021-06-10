export function DiscountAppliedToProducts (sequelize, DataTypes) {
  const DiscountAppliedToProducts = sequelize.define('DiscountAppliedToProducts', {
    discountId: DataTypes.INTEGER,
    productVarientId: DataTypes.INTEGER
  }, {});
  DiscountAppliedToProducts.associate = function(models) {
    // associations can be defined here
  };
  return DiscountAppliedToProducts;
};
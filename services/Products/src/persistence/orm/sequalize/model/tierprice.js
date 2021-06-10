export function TierPrice (sequelize, DataTypes) {
  const TierPrice = sequelize.define('TierPrice', {
    productVarientId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL
  }, {});
  TierPrice.associate = function(models) {
    // associations can be defined here
  };
  return TierPrice;
};
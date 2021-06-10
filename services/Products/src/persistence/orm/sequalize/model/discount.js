export function Discount (sequelize, DataTypes) {
  const Discount = sequelize.define('Discount', {
    name: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    DiscountPercentage: DataTypes.DECIMAL,
    maximumDiscountAmount: DataTypes.INTEGER,
    discountTypeId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER
  }, {});
  Discount.associate = function(models) {
    // associations can be defined here
  };
  return Discount;
};
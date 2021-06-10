export function Order (sequelize, DataTypes) {
  const Order = sequelize.define('Order', {
    pharmacyUserId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    orderStatusId: DataTypes.INTEGER,
    orderTotal: DataTypes.FLOAT,
    purchasedOn: DataTypes.DATE,
    OfferId: DataTypes.INTEGER,
    promotionId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    productsCount: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
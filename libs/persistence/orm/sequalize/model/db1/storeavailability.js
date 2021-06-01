'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreAvailability = sequelize.define('StoreAvailability', {
    supplierId: DataTypes.INTEGER,
    productVarientId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    expirationDate: DataTypes.DATE,
    productionDate: DataTypes.DATE,
    orderMaximumQuantity: DataTypes.INTEGER,
    orderMinimumQuantity: DataTypes.INTEGER,
    storeBarcode: DataTypes.STRING
  }, {});
  StoreAvailability.associate = function(models) {
    // associations can be defined here
  };
  return StoreAvailability;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderReview = sequelize.define('OrderReview', {
    pharmacyUserId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    isApproved: DataTypes.BOOLEAN,
    rating: DataTypes.FLOAT,
    reviewText: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {});
  OrderReview.associate = function(models) {
    // associations can be defined here
  };
  return OrderReview;
};
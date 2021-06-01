'use strict';
module.exports = (sequelize, DataTypes) => {
  const WishList = sequelize.define('WishList', {
    pharmacyUserId: DataTypes.INTEGER,
    productVarientId: DataTypes.INTEGER
  }, {});
  WishList.associate = function(models) {
    // associations can be defined here
  };
  return WishList;
};
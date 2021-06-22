export function WishList (sequelize, DataTypes) {
  const WishList = sequelize.define('WishList', {
    pharmacyUserId: DataTypes.INTEGER,
    productVariantId: DataTypes.INTEGER
  }, {});
  WishList.associate = function(models) {
    // associations can be defined here
  };
  return WishList;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    pharmacyUserId: DataTypes.INTEGER,
    note: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.hasMany(models.CartItem, {
      as: "cartItem",
      foreignKey: "cartId",
      sourceKey: "id"
    });
  };
  return Cart;
};
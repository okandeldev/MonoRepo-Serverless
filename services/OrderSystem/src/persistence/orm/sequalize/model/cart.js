export function Cart (sequelize, DataTypes) {
  const Cart = sequelize.define('Cart', {
    pharmacyUserId: DataTypes.INTEGER,
    note: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    
    Cart.belongsTo(models.PharmacyUser, {foreignKey: 'pharmacyUserId' });
    Cart.hasMany(models.CartItem, { 
      foreignKey: "cartId"
    });
  };
  return Cart;
};
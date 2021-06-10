export function CartItem (sequelize, DataTypes) {
  const CartItem = sequelize.define('CartItem', {
    cartId: DataTypes.INTEGER,
    productVarientId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    note: DataTypes.STRING
  }, {});
  CartItem.associate = function (models) {
    // associations can be defined here
    CartItem.belongsTo(models.Cart, { 
      foreignKey: "cartId" 
    })
  };
  return CartItem;
};
export function ProductIngredient (sequelize, DataTypes) {
  const ProductIngredient = sequelize.define('ProductIngredient', {
    productId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {});
  ProductIngredient.associate = function(models) {
    // associations can be defined here
  };
  return ProductIngredient;
};
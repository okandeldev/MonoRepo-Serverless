export function Ingredient (sequelize, DataTypes) {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
  };
  return Ingredient;
};
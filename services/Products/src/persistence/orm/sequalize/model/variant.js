export function Variant (sequelize, DataTypes) {
  const Variant = sequelize.define('Variant', {
    optionId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Variant.associate = function(models) {
    // associations can be defined here
  };
  return Variant;
};
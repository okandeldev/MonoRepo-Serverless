export function Role (sequelize, DataTypes) {
  const Role = sequelize.define('Role', {
    supplierId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};
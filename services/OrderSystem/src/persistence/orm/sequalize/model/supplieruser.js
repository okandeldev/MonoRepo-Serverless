export function SupplierUser (sequelize, DataTypes) {
  const SupplierUser = sequelize.define('SupplierUser', {
    supplierId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  SupplierUser.associate = function(models) {
    // associations can be defined here
    SupplierUser.belongsTo(models.Supplier, {foreignKey: 'supplierId' });
  };
  return SupplierUser;
};
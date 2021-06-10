export function Supplier (sequelize, DataTypes) {
  const Supplier = sequelize.define('Supplier', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Supplier.associate = function(models) {
    // associations can be defined here
    Supplier.hasMany(models.SupplierUser, {foreignKey: 'supplierId' });
  };
  return Supplier;
};
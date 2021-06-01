'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierUser = sequelize.define('SupplierUser', {
    supplierId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    avtive: DataTypes.BOOLEAN
  }, {});
  SupplierUser.associate = function(models) {
    // associations can be defined here
  };
  return SupplierUser;
};
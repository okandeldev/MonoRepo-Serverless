'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierBranch = sequelize.define('SupplierBranch', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  SupplierBranch.associate = function(models) {
    // associations can be defined here
  };
  return SupplierBranch;
};
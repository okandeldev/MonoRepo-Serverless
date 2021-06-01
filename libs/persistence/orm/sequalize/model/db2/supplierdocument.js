'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierDocument = sequelize.define('SupplierDocument', {
    name: DataTypes.STRING,
    supplierBranchId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  SupplierDocument.associate = function(models) {
    // associations can be defined here
  };
  return SupplierDocument;
};
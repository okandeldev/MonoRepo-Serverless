'use strict';
module.exports = (sequelize, DataTypes) => {
  const PermissionRecord = sequelize.define('PermissionRecord', {
    supplierId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  PermissionRecord.associate = function(models) {
    // associations can be defined here
  };
  return PermissionRecord;
};
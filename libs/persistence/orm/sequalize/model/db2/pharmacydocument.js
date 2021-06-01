'use strict';
module.exports = (sequelize, DataTypes) => {
  const PharmacyDocument = sequelize.define('PharmacyDocument', {
    pharmacyBranchId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  PharmacyDocument.associate = function(models) {
    // associations can be defined here
  };
  return PharmacyDocument;
};
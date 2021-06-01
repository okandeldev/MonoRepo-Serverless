'use strict';
module.exports = (sequelize, DataTypes) => {
  const PharmacyPreferredSuppliers = sequelize.define('PharmacyPreferredSuppliers', {
    pharmacyUserId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER
  }, {});
  PharmacyPreferredSuppliers.associate = function(models) {
    // associations can be defined here
  };
  return PharmacyPreferredSuppliers;
};
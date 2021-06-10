export function PharmacyDiscount (sequelize, DataTypes) {
  const PharmacyDiscount = sequelize.define('PharmacyDiscount', {
    pharmacyId: DataTypes.INTEGER,
    discountId: DataTypes.INTEGER
  }, {});
  PharmacyDiscount.associate = function(models) {
    // associations can be defined here
  };
  return PharmacyDiscount;
};
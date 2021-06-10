export function PharmacyBranch (sequelize, DataTypes) {
  const PharmacyBranch = sequelize.define('PharmacyBranch', {
    pharmacyId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING,
    zoneId: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});
  PharmacyBranch.associate = function(models) {
    // associations can be defined here
  };
  return PharmacyBranch;
};
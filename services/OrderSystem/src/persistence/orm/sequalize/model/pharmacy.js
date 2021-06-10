export function Pharmacy (sequelize, DataTypes) {
  const Pharmacy = sequelize.define('Pharmacy', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {}); 
  Pharmacy.associate = function(models) {
    // associations can be defined here
    Pharmacy.hasMany(models.PharmacyUser, {foreignKey: 'pharmacyId' });
  };
  return Pharmacy;
};
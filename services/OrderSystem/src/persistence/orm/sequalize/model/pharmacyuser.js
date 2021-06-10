export function PharmacyUser (sequelize, DataTypes) {
  //Fields
  const PharmacyUser = sequelize.define('PharmacyUser', {
    pharmacyId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {}); 

  //Associations
  PharmacyUser.associate = function(models) { 
    PharmacyUser.belongsTo(models.Pharmacy, {foreignKey: 'pharmacyId' });
    PharmacyUser.hasOne(models.Cart , {foreignKey: 'pharmacyUserId'}); 
    PharmacyUser.hasMany(models.Request , {foreignKey: 'pharmacyUserId'});
  };
  return PharmacyUser;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
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
    PharmacyUser.belongsTo(models.Pharmacy, {foreignKey: 'pharmacyId', targetKey: 'id'});
    PharmacyUser.belongsTo(models.Cart , {foreignKey: 'id', sourceKey: 'pharmacyUserId'}); 
    PharmacyUser.hasMany(models.Request , {foreignKey: 'pharmacyUserId', sourceKey: 'id'});
  };
  return PharmacyUser;
};
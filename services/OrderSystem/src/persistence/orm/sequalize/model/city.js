export function City (sequelize, DataTypes) {
  const City = sequelize.define('City', {
    countryId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
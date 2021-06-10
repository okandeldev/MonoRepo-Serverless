export function Manufacturer (sequelize, DataTypes) {
  const Manufacturer = sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
    pictureUrl: DataTypes.STRING
  }, {});
  Manufacturer.associate = function(models) {
    // associations can be defined here
  };
  return Manufacturer;
};
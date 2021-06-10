export function Zone (sequelize, DataTypes) {
  const Zone = sequelize.define('Zone', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {});
  Zone.associate = function(models) {
    // associations can be defined here
  };
  return Zone;
};
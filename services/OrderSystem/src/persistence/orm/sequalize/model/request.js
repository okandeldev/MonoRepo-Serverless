export function Request (sequelize, DataTypes) {
  const Request = sequelize.define('Request', {
    pharmacyUserId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    productsCount: DataTypes.INTEGER
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};
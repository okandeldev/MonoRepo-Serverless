'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    pharmacyUserId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    total: DataTypes.FLOAT
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};
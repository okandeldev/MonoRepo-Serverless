'use strict';
module.exports = (sequelize, DataTypes) => {
  const Varient = sequelize.define('Varient', {
    optionId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Varient.associate = function(models) {
    // associations can be defined here
  };
  return Varient;
};
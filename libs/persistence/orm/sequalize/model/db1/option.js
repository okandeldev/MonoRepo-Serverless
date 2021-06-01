'use strict';
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    attributeId: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {});
  Option.associate = function(models) {
    // associations can be defined here
  };
  return Option;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Attribute.associate = function(models) {
    // associations can be defined here
  };
  return Attribute;
};
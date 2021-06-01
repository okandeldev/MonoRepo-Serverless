'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    supplierId: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    startOn: DataTypes.DATE,
    endOn: DataTypes.DATE
  }, {});
  Promotion.associate = function(models) {
    // associations can be defined here
  };
  return Promotion;
};
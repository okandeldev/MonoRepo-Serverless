'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductPicture = sequelize.define('ProductPicture', {
    pictureUrl: DataTypes.STRING,
    productVarientId: DataTypes.INTEGER,
    displayOrder: DataTypes.INTEGER
  }, {});
  ProductPicture.associate = function(models) {
    // associations can be defined here
  };
  return ProductPicture;
};
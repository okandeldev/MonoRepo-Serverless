'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
    productId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ProductTag.associate = function(models) {
    // associations can be defined here
  };
  return ProductTag;
};
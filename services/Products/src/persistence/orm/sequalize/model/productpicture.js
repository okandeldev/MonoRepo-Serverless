export function ProductPicture (sequelize, DataTypes) {
  const ProductPicture = sequelize.define('ProductPicture', {
    pictureUrl: DataTypes.STRING,
    productVariantId: DataTypes.INTEGER,
    displayOrder: DataTypes.INTEGER
  }, {});
  ProductPicture.associate = function(models) {
    // associations can be defined here
  };
  return ProductPicture;
};
export function Offer (sequelize, DataTypes) {
  const Offer = sequelize.define('Offer', {
    supplierId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    productsCount: DataTypes.INTEGER
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};
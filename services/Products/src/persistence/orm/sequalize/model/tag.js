export function Tag (sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', { 
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};
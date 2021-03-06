
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductPictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pictureUrl: {
        type: Sequelize.STRING
      },
      productVariantId: {
        type: Sequelize.INTEGER
      },
      displayOrder: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProductPictures');
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductVarients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      varientId: {
        type: Sequelize.INTEGER
      },
      localBarcode: {
        type: Sequelize.STRING
      },
      internationalBarcode: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('ProductVarients');
  }
};
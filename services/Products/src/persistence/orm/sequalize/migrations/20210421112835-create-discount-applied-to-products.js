
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscountAppliedToProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discountId: {
        type: Sequelize.INTEGER
      },
      productVariantId: {
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
    return queryInterface.dropTable('DiscountAppliedToProducts');
  }
};
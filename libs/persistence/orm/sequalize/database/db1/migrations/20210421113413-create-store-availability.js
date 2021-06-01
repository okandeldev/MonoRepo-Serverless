'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoreAvailabilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplierId: {
        type: Sequelize.INTEGER
      },
      productVarientId: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      discount: {
        type: Sequelize.DECIMAL(10,2)
      },
      expirationDate: {
        type: Sequelize.DATE
      },
      productionDate: {
        type: Sequelize.DATE
      },
      orderMaximumQuantity: {
        type: Sequelize.INTEGER
      },
      orderMinimumQuantity: {
        type: Sequelize.INTEGER
      },
      storeBarcode: {
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
    return queryInterface.dropTable('StoreAvailabilities');
  }
};
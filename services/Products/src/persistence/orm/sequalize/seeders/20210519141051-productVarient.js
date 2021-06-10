

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('productvarients', [
      {
        productId: 1,
        varientId: 1,
        localBarcode: "lbc1",
        internationalBarcode: "ibc1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        varientId: 2,
        localBarcode: "lbc2",
        internationalBarcode: "ibc2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        varientId: 1,
        localBarcode: "lbc3",
        internationalBarcode: "ibc3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        varientId: 2,
        localBarcode: "lbc4",
        internationalBarcode: "ibc4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productvarients', null, {});
  }
};

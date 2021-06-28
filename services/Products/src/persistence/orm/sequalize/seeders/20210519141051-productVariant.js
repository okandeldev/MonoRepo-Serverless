module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('ProductVariants', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('ProductVariants', [
        {
          productId: 1,
          variantId: 1,
          localBarcode: "lbc1",
          internationalBarcode: "ibc1",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          productId: 2,
          variantId: 1,
          localBarcode: "lbc2",
          internationalBarcode: "ibc2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          variantId: 1,
          localBarcode: "lbc3",
          internationalBarcode: "ibc3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 4,
          variantId: 1,
          localBarcode: "lbc4",
          internationalBarcode: "ibc4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 5,
          variantId: 1,
          localBarcode: "lbc5",
          internationalBarcode: "ibc5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 6,
          variantId: 1,
          localBarcode: "lbc6",
          internationalBarcode: "ibc6",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductVariants', null, {});
  }
};

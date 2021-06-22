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
          localBarcode: "lbc3",
          internationalBarcode: "ibc3",
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

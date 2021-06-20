module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Attributes', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Attributes', [
        {
          name: "Size",
          description: "The size of the product",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Color",
          description: "The color of the product",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Attributes', null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Options', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Options', [
        // Size attribute
        {
          attributeId: 1,
          value: "S",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 1,
          value: "M",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 1,
          value: "L",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 1,
          value: "XL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 1,
          value: "XXL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 1,
          value: "XXXL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Colors
        {
          attributeId: 2,
          value: "White",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 2,
          value: "Black",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 2,
          value: "Red",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 2,
          value: "Blue",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 2,
          value: "Green",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          attributeId: 2,
          value: "Yellow",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Options', null, {});
  }
};

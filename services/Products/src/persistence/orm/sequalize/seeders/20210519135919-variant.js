module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Variants', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Variants', [
        //Group 1 => different sizes
        {
          optionId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 3,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 4,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 5,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 6,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Group 2 => different colors
        {
          optionId: 1,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 2,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 3,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 4,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 5,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 6,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Variants', null, {});
  }
};

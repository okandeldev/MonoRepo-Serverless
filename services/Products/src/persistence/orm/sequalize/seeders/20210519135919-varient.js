module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Varients', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Varients', [
        {
          optionId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          optionId: 1,
          groupId: 2,
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
          optionId: 2,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Varients', null, {});
  }
};

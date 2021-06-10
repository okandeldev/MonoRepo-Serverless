

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('varients', [
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('varients', null, {});
  }
};

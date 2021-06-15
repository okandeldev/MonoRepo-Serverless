module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Manufacturers', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Manufacturers', [{
        name: 'Egypt Medical Company',
        pictureUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Manufacturers', null, {});
  }
};

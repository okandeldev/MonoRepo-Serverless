'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Suppliers', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Suppliers', [
        {
          name: '19011 pharmacy',
          phone: '436346346',
          mobile: '346346346',
          email: '19011@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '19011 pharmacy',
          phone: '436346346',
          mobile: '346346346',
          email: '19011@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '19011 pharmacy',
          phone: '436346346',
          mobile: '346346346',
          email: '19011@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '19011 pharmacy',
          phone: '436346346',
          mobile: '346346346',
          email: '19011@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Suppliers', null, {});
  }
};

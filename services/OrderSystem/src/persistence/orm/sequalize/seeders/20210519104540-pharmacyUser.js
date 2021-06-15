'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('PharmacyUsers', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('PharmacyUsers', [
        {
          pharmacyId: 1,
          userName: 'ali',
          email: 'ali@hmail.com',
          password: '1111',
          mobile: '2010',
          active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pharmacyId: 1,
          userName: 'ahmed',
          email: 'ahmed@hmail.com',
          password: '1111',
          mobile: '2011',
          active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pharmacyId: 1,
          userName: 'fady',
          email: 'fady@hmail.com',
          password: '1111',
          mobile: '2015',
          active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PharmacyUsers', null, {});
  }
};

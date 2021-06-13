'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carts', [
      {
        pharmacyUserId: 1,
        note: 'First cart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pharmacyUserId: 1,
        note: 'Second cart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pharmacyUserId: 2,
        note: 'First cart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pharmacyUserId: 2,
        note: 'Second cart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};

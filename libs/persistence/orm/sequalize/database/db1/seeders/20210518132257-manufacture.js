'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Manufacturers', [{
      name: 'Egypt Medical Company',
      pictureUrl: '', 
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Manufacturers', null, {});
  }
};

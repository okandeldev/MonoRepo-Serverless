'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('supplierusers', [{
      supplierId: 1,
      userName: 'ali',
      email: 'ali@gmail.com',
      password: '1111',
      mobile: '3010', 
      active: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      supplierId: 1,
      userName: 'ahmed',
      email: 'ali@gmail.com',
      password: '1111',
      mobile: '3011', 
      active: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      supplierId: 2,
      userName: 'fady',
      email: 'ali@gmail.com',
      password: '1111',
      mobile: '3012', 
      active: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      supplierId: 3,
      userName: 'mohaemed',
      email: 'mohaemed@gmail.com',
      password: '1111',
      mobile: '3013', 
      active: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  }, 
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('supplierusers', null, {});
  }
};

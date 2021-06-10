'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('suppliers', [{
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
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suppliers', null, {});
  }
};

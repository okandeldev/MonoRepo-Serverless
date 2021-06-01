'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pharmacies', [{
      name: '19011 pharmacy',
      email: '19011@gmail.com', 
      phone: '436346346', 
      mobile: '346346346',  
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'el ezaby pharmacy ',
      email: 'ezaby@gmail.com', 
      phone: '657567', 
      mobile: '67567',  
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: 'Dr. Nehal Pharmacy ',
      email: 'Nehal@gmail.com', 
      phone: '675', 
      mobile: '6756',  
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: 'M Fouad pharmacy',
      email: 'Fouad@gmail.com', 
      phone: '34234234', 
      mobile: '34234234',  
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pharmacies', null, {});
  }
};

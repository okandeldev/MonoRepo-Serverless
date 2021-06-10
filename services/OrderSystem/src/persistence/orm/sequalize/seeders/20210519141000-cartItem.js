'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cartitems', [
      {
        cartId: 1,
        productVarientId: 1,
        quantity: 10,
        note: "cart item notes 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cartId: 1,
        productVarientId: 2,
        quantity: 7,
        note: "cart item notes 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cartId: 1,
        productVarientId: 3,
        quantity: 15,
        note: "cart item notes 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cartId: 2,
        productVarientId: 1,
        quantity: 20,
        note: "cart item notes 4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cartId: 2,
        productVarientId: 2,
        quantity: 8,
        note: "cart item notes 5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cartitems', null, {});
  }
};

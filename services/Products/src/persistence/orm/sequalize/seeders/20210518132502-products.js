module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await queryInterface.rawSelect('Products', {
      where: {},
    }, ['id']);

    if (!data) {
      return queryInterface.bulkInsert('Products', [
        {
          name: 'Panadol extra',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Panadol extra',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cold and flu',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Cold and flu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Calcivan',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Calcivan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tusskan',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Tusskan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Oplex',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Oplex',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uricodrop',
          description: '',
          boxSize: '12 tablets',
          manufacturerId: 1,
          concenteration: '20%',
          type: 1,
          unit: 1,
          price: 70,
          isPriceEditable: 1,
          scientificName: 'Uricodrop',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

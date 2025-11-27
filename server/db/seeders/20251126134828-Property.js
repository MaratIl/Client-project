'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Properties',
      [
        {
          type: 'Дом',
          price: 35000,
          addres: 'Ленина 12',
          userId: null,
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=600',
          descriptions:
            'Просторный двухэтажный дом для аренды с современным ремонтом и большим садом. Идеально для семьи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Квартира',
          price: 25000,
          addres: 'Центральная 45, кв. 18',
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=600',
          userId: null,
          descriptions:
            'Светлая трехкомнатная квартира для долгосрочной аренды в новом жилом комплексе',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Комната',
          price: 12000,
          addres: 'Студенческая 23, к. 4',
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=600',
          userId: null,
          descriptions:
            'Уютная комната в современной трехкомнатной квартире для аренды. Все соседи - студенты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Квартира',
          price: 18000,
          addres: 'Проспект Мира 67, кв. 304',
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=600',
          userId: null,
          descriptions:
            'Уютная однокомнатная квартира для аренды с готовым ремонтом и всей необходимой техникой',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Комната',
          price: 8000,
          addres: 'Рабочая 15, к. 7',
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=600',
          userId: null,
          descriptions:
            'Комната в двухкомнатной квартире для аренды. Подходит для одного человека, рядом метро',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Properties', null, {});
  },
};

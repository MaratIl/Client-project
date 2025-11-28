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
          image: 'https://ruplans.ru/cms_files/98/184/6362/vid1category.jpg',
          descriptions:
            'Просторный двухэтажный дом для аренды с современным ремонтом и большим садом. Идеально для семьи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Квартира',
          price: 25000,
          addres: 'Центральная 45, кв. 18',
          image: 'https://hoff.ru/upload/medialibrary/11c/11cb47c1d2d4f248b7dde57f479f2d47.jpg',
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
          image: 'https://newphoto.club/uploads/posts/2022-11/1667927197_1-newphoto-club-p-komnata-mechti-dlya-podrostka-malchika-1.jpg',
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
          image: 'https://salon.ru/storage/thumbs/gallery/631/630382/835_3500_s265.jpg',
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
          image: 'https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2189.jpg?semt=ais_hybrid&w=740&q=80',
          userId: null,
          descriptions:
            'Комната в двухкомнатной квартире для аренды. Подходит для одного человека, рядом метро',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          type: 'Дом',
          price: 80000,
          addres: 'Рабочая 1',
          image: 'https://www.imufa.ru/images/2019/03/17/fotka3.jpg',
          userId: null,
          descriptions:
            'Красивый, просторный дом с шестью спальнями!',
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

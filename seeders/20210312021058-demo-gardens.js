'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Gardens",
      [
        {
          name:"Butterfly Garden",
          img:"https://butterflygardening101.com/wp-content/uploads/elementor/thumbs/butterflygardening101.com-_-black-swallowail-on-pentas-0122-nmshpa430obkarsd4qa6uh8c1y2cmm81d1q1wbf7gi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Kitchen Garden",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jardin_potager_001.JPG/1200px-Jardin_potager_001.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Rock Garden",
          img:"https://i.ytimg.com/vi/O76TQ_lRvsM/maxresdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Rose Garden",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aramaki_rose_park04s2400.jpg/800px-Aramaki_rose_park04s2400.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Tropical Garden",
          img:"https://upload.wikimedia.org/wikipedia/commons/9/95/Tropical_garden_monte_hg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Water Garden",
          img:"https://upload.wikimedia.org/wikipedia/commons/1/17/Garden_pond_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },    
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

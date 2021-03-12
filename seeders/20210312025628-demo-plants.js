'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Plants",
      [
        {
          name:"Marigold",
          img:"https://myfarmlife.com/wp-content/uploads/2011/05/2_11_butterfly1.jpg",
          gardenId: 1,
        },
        {
          name:"Purple",
          img:"https://myperfectplants.com/wp-content/uploads/36775647642_c600a6010e_c.jpg",
          gardenId: 1,
       },
       {
        name:"Orange",
        img:"https://butterflywebsite.com/images/Eastern_Tailed_Blue_butterfly.jpg",
        gardenId: 1,
       },
       {
        name:"Cabbage",
        img:"https://img2.exportersindia.com/product_images/bc-full/dir_147/4402485/cabbage-plant-1501570250-3184434.jpeg",
        gardenId: 2,
       },
       {
        name:"Tomato",
        img:"https://i1.wp.com/grilloservices.com/wp-content/uploads/2011/12/tomatoesonvine.jpg?resize=565%2C850&ssl=1",
        gardenId: 2,
       },
       {
        name:"Cauliflower",
        img:"https://i.pinimg.com/originals/48/a5/70/48a570bd61f5dc16e5f28b7666f20573.jpg",
        gardenId: 2,
       },
       {
        name:"Blue Spire",
        img:" https://s3.amazonaws.com/cdn.brecks.com/images/800/62959.jpg",
        gardenId: 3,
       },
       {
        name:"Silver Carpet Lambs Ear",
        img:"https://s3.amazonaws.com/cdn.brecks.com/images/500/77433.jpg",
        gardenId: 3,
       },
       {
        name:"Atlantis Sedum",
        img:"https://s3.amazonaws.com/cdn.springhillnursery.com/images/800/76721.jpg",
        gardenId: 3,
       },
        {
          name:"Pink Rose",
          img:"https://www.gardenpicsandtips.com/wp-content/uploads/2015/11/video-prune-and-train-climbing-r.jpg",
          gardenId: 4,
        },
        {
          name:"Red Rose",
          img:"https://www.gardendesign.com/pictures/images/900x705Max/site_3/oso-easy-rose-rose-of-the-year-proven-winners_14753.jpg",
          gardenId: 4,
        },
        {
          name:"Yellow Rose",
          img:"https://www.jacksonandperkins.com/images/xxl/v2033.jpg",
          gardenId: 4,
        },
        {
          name:"Banana",
          img:"https://www.thedailymeal.com/sites/default/files/story/2017/banana%20tree%20hero.jpg",
          gardenId: 5,
        },
        {
          name:"Guava",
          img:"https://media.istockphoto.com/photos/guava-fruit-guava-plant-grown-in-tropics-picture-id1148887872",
          gardenId: 5,
        },
        {
          name:"Fern",
          img:"https://www.trees.com/wp-content/uploads/files/inline-images/Ostrich-Fern.jpg",
          gardenId: 5,
        },
        {
          name:"Lotus",
          img:"https://www.floraqueen.com/blog/wp-content/uploads/2020/01/shutterstock_1006750006.jpg",
          gardenId: 6,
        },
        {
          name:"Purple Water hyacinth",
          img:"https://previews.123rf.com/images/noppharat/noppharat1403/noppharat140300292/26787123-purple-water-hyacinth-flowers-are-blooming.jpg",
          gardenId: 6,
        },
        {
          name:"White Water Lilly",
          img:"https://upload.wikimedia.org/wikipedia/commons/3/3f/2016_Kwiat_grzybieni_bia%C5%82ych_2.jpg",
          gardenId: 6,
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

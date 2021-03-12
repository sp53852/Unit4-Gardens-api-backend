'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plant.belongsTo(models.Garden, { foreignKey: "gardenId"});
    }
  };
  Plant.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    gardenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};
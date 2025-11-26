'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });
      this.belongsToMany(models.User, {
        through: 'Favorites',
        foreignKey: 'propertyId',
        as: 'favoritedBy',
      });
    }
  }
  Property.init(
    {
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      addres: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      descriptions: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Property',
    },
  );
  return Property;
};

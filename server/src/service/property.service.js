const { Property } = require('../../db/models');

class PropertyService {
    async findAllProperties() {
        return Property.findAll()
    }

    async findProperty(id) {
        return Property.findByPk(id)
    }

    async createProperty(data) {
        return Property.create(data)
    }

    async updateProperty(id, data) {
        const property = await Property.findByPk(id)
        if (!property) {
            return null
        }
        return property.update(data)
    }

    async deleteProperty(id) {
        await Property.destroy({where: {id}})
        return true
    }

    async findFavoritesByUser(userId) {
        const favorites = await Favorites.findAll({ where: { userId } });
        const ids = favorites.map((f) => f.propertyId);
        if (ids.length === 0) return [];
        return Property.findAll({ where: { id: ids } });
      }
    
      async addFavorite(userId, propertyId) {
    
        const property = await Property.findByPk(propertyId);
        if (!property) {
          throw new Error('Недвижимость не найдена');
        }
    
       
        const [fav] = await Favorites.findOrCreate({
          where: { userId, propertyId },
        });
        return fav;
      }
    
      async removeFavorite(userId, propertyId) {
        await Favorites.destroy({ where: { userId, propertyId } });
        return true;
      }
}

module.exports = PropertyService
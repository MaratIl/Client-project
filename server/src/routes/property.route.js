const PropertyService = require('../service/property.service')
const PropertyController = require("../controllers/property.controller")

const propertyRouth = require('express').Router()

const propertyService = new PropertyService()
const propertyController = new PropertyController(propertyService)

propertyRouth.get('/', propertyController.findAllProperties);


propertyRouth.post('/', propertyController.createProperty);
propertyRouth.put('/:id', propertyController.updateProperty);
propertyRouth.delete('/:id', propertyController.deleteProperty);


propertyRouth.get('/favorites', propertyController.getFavorites,
);
propertyRouth.post('/:id/favorite', propertyController.addToFavorites,
);
propertyRouth.delete('/:id/favorite', propertyController.removeFromFavorites,
);
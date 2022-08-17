const mongoose = require('mongoose')

//coffeeShop schema
const coffeeShopSchema = new mongoose.Schema({
  name: String,
  website: String,
  description: String,
  location: String,
})

coffeeShopSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('CoffeeShop', coffeeShopSchema)
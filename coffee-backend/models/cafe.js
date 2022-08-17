const mongoose = require('mongoose')

//cafe schema
const cafeSchema = new mongoose.Schema({
  name: String,
  website: String,
  description: String,
  location: String,
})

cafeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Cafe', cafeSchema)
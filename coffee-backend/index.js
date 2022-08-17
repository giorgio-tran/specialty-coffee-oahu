const config = require('./utils/config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB')
  })

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('<h1> hello world </h1>')
  })

  const PORT = config.PORT
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })

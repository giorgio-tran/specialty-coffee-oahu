const coffeeShopsRouter = require('express').Router()
const CoffeeShop = require('../models/coffeeShop')

coffeeShopsRouter.get('/', (request, response) => {
    CoffeeShop.find({}).then(coffeeShops => {
        response.json(coffeeShops)
    })
})

coffeeShopsRouter.get('/:id', (request, response, next) => {
    CoffeeShop.findById(request.params.id)
        .then(coffeeShop => {
            if (coffeeShop) {
                response.json(coffeeShop)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

coffeeShopsRouter.put('/:id', (request, response, next) => {
  const { name, website, description, location } = request.body

  CoffeeShop.findByIdAndUpdate(
    request.params.id,
    { name, website, description, location },
    { new: true, runValidators: true, context: 'query' }
  )
  .then(updatedCoffeeShop => {
    response.json(updatedCoffeeShop)
  })
  .catch(error => next(error))
})

coffeeShopsRouter.post('/', (request, response, next) => {
    const body = request.body

    const coffeeShop = new CoffeeShop({
        name: body.name,
        website: body.website,
        description: body.description,
        location: body.location,
    })

    coffeeShop.save()
        .then(savedCoffeeShop => {
            response.json(savedCoffeeShop)
        })
        .catch(error => next(error))
})

coffeeShopsRouter.delete('/:id', (request, response, next) => {
    CoffeeShop.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = coffeeShopsRouter
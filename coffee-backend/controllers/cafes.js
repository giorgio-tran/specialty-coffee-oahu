const cafesRouter = require('express').Router()
const Cafe = require('../models/cafe')

cafesRouter.get('/', (request, response) => {
    Cafe.find({}).then(cafes => {
        response.json(cafes)
    })
})

cafesRouter.get('/:id', (request, response, next) => {
    Cafe.findById(request.params.id)
        .then(cafe => {
            if (cafe) {
                response.json(cafe)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

cafesRouter.post('/', (request, response, next) => {
    const body = request.body

    const cafe = new Cafe({
        name: body.name,
        website: body.website,
        description: body.description,
        location: body.location,
    })

    cafe.save()
        .then(savedCafe => {
            response.json(savedCafe)
        })
        .catch(error => next(error))
})

cafesRouter.delete('/:id', (request, response, next) => {
    Cafe.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = cafesRouter
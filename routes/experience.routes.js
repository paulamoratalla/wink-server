const router = require('express').Router()
const Experience = require('./../models/Experience.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')

// Create experience 
router.post('/create', isAuthenticated, (req, res) => {

    const { name, place, price, imageExp, descriptionExp } = req.body

    Experience
        .create({ name, place, price, imageExp, descriptionExp })
        .then(newExperience => res.json(newExperience))
        .catch(err => res.status(500).json(err))
})

// Get all experiences
router.get('/list', (req, res) => {

    Experience
        .find()
        .then(experiences => res.json(experiences))
        .catch(err => res.status(500).json(err))
})

// Get experience details
router.get('/:experienceId', isAuthenticated, (req, res) => {

    const { experienceId } = req.params

    Experience
        .findById(experienceId)
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

// Delete experience
router.delete("/:experienceId/delete", isAuthenticated, (req, res) => {

    const { experienceId } = req.params

    Experience
        .findByIdAndDelete(experienceId)
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

// Edit experience
router.put('/:experienceId/edit', isAuthenticated, (req, res) => {

    const { name, place, price, imageExp, descriptionExp } = req.body
    const { experienceId } = req.params

    Experience
        .findByIdAndUpdate(experienceId, { name, place, price, imageExp, descriptionExp })
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

module.exports = router
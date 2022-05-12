const router = require('express').Router()
const Experience = require('./../models/Experience.model')

// Create experience 
router.post('/create', (req, res) => {

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
        .select('name')
        .then(experiences => res.json(experiences))
        .catch(err => res.status(500).json(err))
})

// Get experience details
router.get('/:experienceId', (req, res) => {

    const { experienceId } = req.params

    Experience
        .findById(experienceId)
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

// Delete experience
router.delete("/:experienceId/delete", (req, res) => {

    const { experienceId } = req.params

    Experience
        .findByIdAndDelete(experienceId)
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

// Edit experience
router.put('/:experienceId/edit', (req, res) => {

    const { name, place, price, imageExp, descriptionExp } = req.body
    const { experienceId } = req.params

    Experience
        .findByIdAndUpdate(experienceId, { name, place, price, imageExp, descriptionExp })
        .then(experience => res.json(experience))
        .catch(err => res.status(500).json(err))
})

module.exports = router
const router = require('express').Router()
const User = require('./../models/User.model')

// Get all users 
router.get('/all', (req, res) => {

    User
        .find()
        .select()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
})

// Get user profile
router.get('/:userId', (req, res) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

// Delete user 
router.delete("/:userId/delete", (req, res) => {

    const { userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
})

// Edit user
router.put('/:userId/edit', (req, res) => {

    const { email, password } = req.body
    const { userId } = req.params

    User
        .findByIdAndUpdate(userId, { email, password })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

module.exports = router

const router = require('express').Router()
const User = require('./../models/User.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')

// Get all users 
router.get('/all', (req, res) => {

    User
        .find()
        .select()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
})


// Get my profile
router.get('/profile', isAuthenticated, (req, res) => {

    const { _id } = req.payload

    User
        .findById(_id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

// Delete user 
router.delete('/:userId/delete', isAuthenticated, (req, res) => {

    const { userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Edit user
router.put('/:userId/edit', (req, res) => {

    const { name, email, birth, identity, profileImg, city, interestedGender, heigth, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = req.body
    const { userId } = req.params

    const features = {
        heigth: heigth,
        exercise: exercise,
        zodiac: zodiac,
        education: education,
        drink: drink,
        smoke: smoke,
        lookingFor: lookingFor,
        children: children,
        religion: religion,
        political: political
    }

    User
        .findByIdAndUpdate(userId, { name, email, birth, identity, profileImg, city, interestedGender, features })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

//Add to people
router.post('/:usersId/add-people', (req, res, next) => {

    const { userId } = req.params
    const thisUser = req.payload._id

    User
        .findByIdAndUpdate(thisUser, { $addToSet: { people: userId } })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
});

//Add to my matches
// router.post('/:usersId/add-defmatch', (req, res, next) => {

//     const { userId } = req.params
//     const thisUser = req.session.currentUser._id
//     if ()

//         User
//             .findByIdAndUpdate(thisUser, { $addToSet: { defMatches: userId } })
//             .then(user => res.json(user))
//             .catch(err => res.status(500).json(err))
// });

//Remove from people
router.post('/:usersId/remove', (req, res, next) => {

    const { userId } = req.params
    const thisUser = req.payload._id

    User
        .findByIdAndUpdate(thisUser, { $pull: { people: userId } })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

// Get user profile
router.get('/:userId', isAuthenticated, (req, res) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})
module.exports = router


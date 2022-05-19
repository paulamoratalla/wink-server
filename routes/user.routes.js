const router = require('express').Router()
const User = require('./../models/User.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')

// Get all users
router.get('/all', isAuthenticated, (req, res) => {
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
router.put('/:userId/edit', isAuthenticated, (req, res) => {
    const { name, email, birth, identity, profileImg, city, interestedGender, height, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = req.body
    const { userId } = req.params
    const features = {
        height: height,
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

//Add to matches
// router.post('/:userId/add', isAuthenticated, (req, res, next) => {

//     const { userId } = req.params
//     const myUser = req.payload._id

//     User
//         .findByIdAndUpdate(myUser, { $addToSet: { matches: userId } })
//         .then(() => {
//         })
//         .catch(err => res.status(500).json(err))

//     User
//         .findById(myUser)
//         .then((user1) => {

//             User
//                 .findById(userId)
//                 .then((user2) => {
//                     if (user1.matches.includes(userId) && (user2.matches.includes(myUser))) {

//                         user1.lovers.push(userId) && user2.lovers.push(myUser)
//                     }
//                     console.log('LISTA DE LOVERS------->', lovers)
//                 })
//                 .catch(err => res.status(500).json(err))
//         })
//         .catch(err => res.status(500).json(err))
// });

router.post('/:userId/add', isAuthenticated, (req, res, next) => {

    const { userId } = req.params
    const myUser = req.payload._id
    let promiseArrResolve

    User
        .findByIdAndUpdate(myUser, { $addToSet: { matches: userId } })
        .then(() => {
            return User.findByIdAndUpdate(userId, { $addToSet: { matches: myUser } })
        })
        .then(() => {
            let promiseArr = [
                User.findById(userId),
                User.findById(myUser)
            ]
            return Promise.all(promiseArr)
        })
        .then(([otherUserResponse, myUserResponse]) => {
            if (otherUserResponse.matches.includes(myUser) && myUserResponse.matches.includes(userId)) {
                console.log('se supone que hay match sabes')
                promiseArrResolve = [
                    User.findByIdAndUpdate(myUser, { $addToSet: { lovers: userId } }),
                    User.findByIdAndUpdate(userId, { $addToSet: { lovers: myUser } })
                ]
            }
            return Promise.all(promiseArrResolve)
        })
        .then(response => {
            res.json(response)
            console.log('------- response', response)
        })
        .catch(err => res.status(500).json(err))
})




router.post('/:usersId/remove', isAuthenticated, (req, res, next) => {
    const { userId } = req.params
    const thisUser = req.payload._id
    User
        .findByIdAndUpdate(thisUser, { $pull: { matches: userId } })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

// Get user profile
router.get('/:userId', isAuthenticated, (req, res) => {
    const { userId } = req.params
    User
        .findById(userId)
        .populate('matches lovers boughtExperiences')
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
})

// Update Images
router.put("/:userId/upload-images", (req, res) => {

    const { userId } = req.params
    const galleryProfile = req.body.images

    User
        .findByIdAndUpdate(userId, { $addToSet: { images: { $each: galleryProfile } } }, { new: true })
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })


})

module.exports = router


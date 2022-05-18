const router = require('express').Router()
const Winkdate = require('../models/Winkdate.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')

// Create date
router.post('/create', isAuthenticated, (req, res) => {

    const { experience, date, matches } = req.body
    const creator = req.payload._id
    // const host = User.findById(id).populate("matches")


    Winkdate
        .create({ experience, date, matches, creator }) // comprobar que llegue experiences
        .then(newWinkdate => res.json(newWinkdate))
        .catch(err => res.status(500).json(err))
})

// lover is not defined 

// Get all dates
router.get('/list', (req, res) => {

    Winkdate
        .find()
        .populate("experience lover creator")
        .then(winkdates => res.json(winkdates))
        .catch(err => res.status(500).json(err))
})


// Get date details
router.get('/:winkdateId', (req, res) => {

    const { winkdateId } = req.params

    Winkdate
        .findById(winkdateId)
        .populate("experience lover creator")
        .then(winkdate => res.json(winkdate))
        .catch(err => res.status(500).json(err))
})

module.exports = router

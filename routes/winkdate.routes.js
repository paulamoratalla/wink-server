const router = require('express').Router()
const Winkdate = require('../models/Winkdate.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')
// isAuthenticated

// Create date
router.post('/create', (req, res) => {

    const { experience, date, lover } = req.body
    const { _id } = req.payload
    // const host = User.findById(id).populate("matches")

    Winkdate
        .create({ experience, date, lover, creator: _id })
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

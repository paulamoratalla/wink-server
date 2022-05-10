const router = require('express').Router()
const Test = require('./../models/Test.model')
const User = require('./../models/User.model')

//Create a test
router.post('/new', (req, res) => {

    const { owner, answer11, answer12, answer13, answer21, answer22, answer23, answer31, answer32, answer33, answer41, answer42, answer43, answer51, answer52, answer53 } = req.body

    const questions = {
        question1: {
            answer1: answer11,
            answer2: answer12,
            answer3: answer13,
        },
        question2: {
            answer1: answer21,
            answer2: answer22,
            answer3: answer23,
        },
        question3: {
            answer1: answer31,
            answer2: answer32,
            answer3: answer33,
        },
        question4: {
            answer1: answer41,
            answer2: answer42,
            answer3: answer43,
        },
        question5: {
            answer1: answer51,
            answer2: answer52,
            answer3: answer53,
        }
    }

    Test
        .create({ owner, questions })
        .populate('owner')
        .then(test => res.json(test))
        .catch(err => res.status(500).json(err))
})

// Get all tests
router.get('/all', (req, res) => {

    Test
        .find()
        .populate('owner')
        .select('owner')
        .then(tests => res.json(tests))
        .catch(err => res.status(500).json(err))
})

// Get test data
router.get('/:testId', (req, res) => {

    const { testId } = req.params

    Test
        .findById(testId)
        .then(test => res.json(test))
        .catch(err => res.status(500).json(err))
})

// Delete test
router.delete("/:testId/delete", (req, res) => {

    const { testId } = req.params

    Test
        .findByIdAndDelete(testId)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
})

// Edit test
router.put('/:testId/edit', (req, res) => {

    const { answer11, answer12, answer13, answer21, answer22, answer23, answer31, answer32, answer33, answer41, answer42, answer43, answer51, answer52, answer53 } = req.body
    const { testId } = req.params

    Test
        .findByIdAndUpdate(testId, { answer11, answer12, answer13, answer21, answer22, answer23, answer31, answer32, answer33, answer41, answer42, answer43, answer51, answer52, answer53 })
        .then(test => res.json(test))
        .catch(err => res.status(500).json(err))
})

module.exports = router

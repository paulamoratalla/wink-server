const router = require('express').Router()
const Test = require('./../models/Test.model')
const User = require('./../models/User.model')

//Create a test
router.post('/new', (req, res) => {

    const { answer11, answer12, answer13, answer21, answer22, answer23, answer31, answer32, answer33, answer41, answer42, answer43, answer51, answer52, answer53 } = req.body
    const owner = req.payload._id

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
        .then(test => res.json(test))
        .catch(err => res.status(500).json(err))
})

// Get all tests
router.get('/all', (req, res) => {

    Test
        .find()
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
        .catch(err => res.status(500).json(err))
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

// Compare test 
router.post('/testId/match', (req, res) => {

    const { id } = req.params
    const { _id } = req.session.currentUser

    Test
        .findById(id)
        .then(test => {

            let matchCount = ''
            let afinidad = ''

            if (id.answer11 == true && _id.answer11 == true) {
                return matchCount += 1
            }
            if (id.answer12 == true && _id.answer12 == true) {
                return matchCount += 1
            }
            if (id.answer13 == true && _id.answer13 == true) {
                return matchCount += 1
            }
            if (id.answer21 == true && _id.answer21 == true) {
                return matchCount += 1
            }
            if (id.answer22 == true && _id.answer22 == true) {
                return matchCount += 1
            }
            if (id.answer23 == true && _id.answer23 == true) {
                return matchCount += 1
            }
            if (id.answer31 == true && _id.answer31 == true) {
                return matchCount += 1
            }
            if (id.answer32 == true && _id.answer32 == true) {
                return matchCount += 1
            }
            if (id.answer33 == true && _id.answer33 == true) {
                return matchCount += 1
            }
            if (id.answer41 == true && _id.answer41 == true) {
                return matchCount += 1
            }
            if (id.answer42 == true && _id.answer42 == true) {
                return matchCount += 1
            }
            if (id.answer43 == true && _id.answer43 == true) {
                return matchCount += 1
            }
            if (id.answer51 == true && _id.answer51 == true) {
                return matchCount += 1
            }
            if (id.answer52 == true && _id.answer52 == true) {
                return matchCount += 1
            }
            if (id.answer53 == true && _id.answer53 == true) {
                return matchCount += 1
            } else {
                return matchCount
            }

            if ((matchCount >= 3) == true) {
                return afinidad == true
            }

            if (afinidad == true) {

            }

        })
        // Test.find({ answer: test.answer, })
        .catch(err => res.status(500).json(err))
})

module.exports = router
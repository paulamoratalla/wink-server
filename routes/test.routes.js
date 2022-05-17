// const router = require('express').Router()
// const Test = require('./../models/Test.model')
// const User = require('./../models/User.model')
// const { isAuthenticated } = require('../middleware/jwt.middleware')


// //Take test
// router.post('/new', isAuthenticated, (req, res) => {

//     const { answer11, answer12, answer13, answer21, answer22, answer23, answer31, answer32, answer33, answer41, answer42, answer43, answer51, answer52, answer53 } = req.body
//     const owner = req.payload._id

//     const questions = {
//         question1: {
//             answer1: answer11,
//             answer2: answer12,
//             answer3: answer13,
//         },
//         question2: {
//             answer1: answer21,
//             answer2: answer22,
//             answer3: answer23,
//         },
//         question3: {
//             answer1: answer31,
//             answer2: answer32,
//             answer3: answer33,
//         },
//         question4: {
//             answer1: answer41,
//             answer2: answer42,
//             answer3: answer43,
//         },
//         question5: {
//             answer1: answer51,
//             answer2: answer52,
//             answer3: answer53,
//         }
//     }

//     Test
//         .create({ owner, questions })
//         .then(test => res.json(test))
//         .catch(err => res.status(500).json(err))
// })

// // Get all tests
// router.get('/all', isAuthenticated, (req, res) => {

//     Test
//         .find()
//         .select('owner')
//         .then(tests => res.json(tests))
//         .catch(err => res.status(500).json(err))
// })

// // Get test data
// router.get('/:testId', isAuthenticated, (req, res) => {

//     const { testId } = req.params

//     Test
//         .findById(testId)
//         .then(test => res.json(test))
//         .catch(err => res.status(500).json(err))
// })

// // Delete test
// router.delete("/:testId/delete", isAuthenticated, (req, res) => {

//     const { testId } = req.params

//     Test
//         .findByIdAndDelete(testId)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// // Edit test
// router.put('/:testId/edit', isAuthenticated, (req, res) => {

//     const { answer11 } = req.body
//     const { testId } = req.params

//     Test
//         .findByIdAndUpdate(testId, { answer11 }, { new: true })
//         .then(console.log('actualizado o que', answer11)) // se actualiza por console.log() pero no en la db
//         .then(test => res.json(test))
//         .catch(err => res.status(500).json(err))
// })

// //Compare test
// router.post('/match', isAuthenticated, (req, res) => {

//     const { _id } = req.payload

//     const promises = [
//         Test.findOne({ owner: { _id } }),
//         Test.find()
//     ]

//     let loveCounter = 0

//     Promise
//         .all(promises)
//         .then(([test, allTests]) => {

//             let myTest = Object.entries(test.questions)

//             myTest.forEach(eachMyUserQuestion => {
//                 eachMyUserQuestion.forEach(() => {
//                     let questionName = eachMyUserQuestion[0]
//                     let answerArr = Object.values(eachMyUserQuestion[1])

//                     allTests.forEach(test => {
//                         loveCounter = 0

//                         let matches = []

//                         let eachTest = Object.entries(test.questions)

//                         eachTest.forEach(eachQuestion => {
//                             eachQuestion.forEach(() => {



//                                 let questionName1 = eachQuestion[0]
//                                 let answerArr1 = Object.values(eachQuestion[1])

//                                 console.log('LENGTH---------->', answerArr1)

//                                 if (questionName === questionName1) {

//                                     for (let i = 0; i <= answerArr.length; i++) {

//                                         if (answerArr[i] === true && answerArr1[i] === true) {
//                                             loveCounter++
//                                         }

//                                         // console.log('SOY LA ITERACION -----', i)
//                                         console.log('love counter------------>', loveCounter)

//                                     }
//                                     //if (answerArr[0] === answerArr1[0] && answerArr[1] === answerArr1[1] && answerArr[2] === answerArr1[2]) {
//                                     // console.log('SE SUMA UN PUNTITO DE MATCH TOMA YA')
//                                     // loveCounter++
//                                     // console.log('ESTE ES EL CONTADOR DEL AMORRRRR', loveCounter)
//                                     // console.log('lovecounteeeeeeeeeeer', loveCounter)
//                                     // }
//                                     // if (loveCounter >= 3) {
//                                     //     // matches.push(test)
//                                     //     matches.push(test.owner)

//                                     //     console.log('TEST-------__>', test)

//                                     //     console.log('SOY EL ARRAY CON ALGO ----->', matches)
//                                     // }
//                                 }
//                             })
//                         })
//                     })
//                 })
//             })
//         })

//     User.findById(_id) // --------> el user con el que se ha hecho match para addToSet a matches del req.payload
// })

// // allTest.forEach(function (questionsArray) {
// //     questionsArray.forEach(function (answerData) {
// //         console.log(answerData)
// //     })
// // })





// // .then(answerData => {
// //     res.json(result)
// // })

// // .catch(err => res.status(500).json(err))

// // })


// // parentArray.forEach(function (childArray) {
// //     childArray.forEach(function (item) {
// //         console.log(item);
// //     });
// // });





// // Match
// //     .findById(id)
// //     .then(matches => {

// //         if (matches.players.length < 4) {

// //             Match
// //                 .findByIdAndUpdate(id, { $addToSet: { players: _id } })
// //                 .then(() => res.redirect('/partidos'))
// //                 .catch(err => console.log(err))
// //         } else {
// //             res.redirect('/partidos')
// //         }



// // Promise.
// //     all([promise1, promise2])
// //     .then(({ data }) => {
// //         console.log(data)
// //     }) // comparas los resultados del test de currentUser con cada user.test. cada answer

// // Test
// //     .findById(id)
// //     .then(test => {
// //         let matchCount = 0
// //         let afinidad = ''
// //         if (id.answer11 == true && _id.answer11 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer12 == true && _id.answer12 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer13 == true && _id.answer13 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer21 == true && _id.answer21 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer22 == true && _id.answer22 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer23 == true && _id.answer23 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer31 == true && _id.answer31 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer32 == true && _id.answer32 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer33 == true && _id.answer33 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer41 == true && _id.answer41 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer42 == true && _id.answer42 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer43 == true && _id.answer43 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer51 == true && _id.answer51 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer52 == true && _id.answer52 == true) {
// //             return matchCount += 1
// //         }
// //         if (id.answer53 == true && _id.answer53 == true) {
// //             return matchCount += 1
// //         } else {
// //             return matchCount
// //         }
// //         if ((matchCount >= 3) == true) {
// //             return afinidad == true
// //         }
// //         if (afinidad == true) {
// //         }
// //     })
// //     // Test.find({ answer: test.answer, })
// //     .catch(err => res.status(500).json(err))
// // })

// module.exports = router

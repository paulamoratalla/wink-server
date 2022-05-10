const express = require("express")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("../models/User.model")

const router = express.Router()
const saltRounds = 10

// Create user
router.post('/signup', (req, res, next) => {

    const { name, password, email, profileImg, city } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ name, email, profileImg, city, password: hashedPassword })
        })
        .then((createdUser) => {
            const { name, email, profileImg, city, _id } = createdUser
            const user = { name, email, profileImg, city, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
})

module.exports = router
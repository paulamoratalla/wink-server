const router = require("express").Router();

router.use('/user', require('./user.routes'))
router.use('/auth', require('./auth.routes'))
router.use('/experience', require('./experience.routes'))

module.exports = router;

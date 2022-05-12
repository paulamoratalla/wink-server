const router = require("express").Router();

router.use('/user', require('./user.routes'))
router.use('/auth', require('./auth.routes'))
router.use('/test', require('./test.routes'))
router.use('/experience', require('./experience.routes'))
router.use('/upload', require('./upload.routes'))

module.exports = router;

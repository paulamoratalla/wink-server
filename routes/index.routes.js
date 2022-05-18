const router = require("express").Router();

router.use('/user', require('./user.routes'))
router.use('/auth', require('./auth.routes'))
// router.use('/test', require('./test.routes'))
router.use('/winkdate', require('./winkdate.routes'))
router.use('/experience', require('./experience.routes'))
router.use('/upload', require('./upload.routes'))
router.use('/payment', require('./payment.routes'))

module.exports = router;

const router = require("express").Router();

const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error uploading the file' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})



router.post('/images', uploader.array('photos'), (req, res) => {

    if (!req.files) {
        res.status(500).json({ errorMessage: 'Error uploading the file' })
        return
    }

    const images = req.files.map(elm => elm.path)

    res.json({ cloudinary_urls: images })
})


module.exports = router;

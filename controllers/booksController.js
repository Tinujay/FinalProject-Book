const router = require('express').Router()

//GET - new movie (form) route
router.get('/new', (req, res) => {
    res.render('readingdiary/new')
})


module.exports = router
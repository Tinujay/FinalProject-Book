const router = require('express').Router()
const db = require('../models')


//GET - retreives all the new books you added in database in MongoDB and renders on readingdiary/profile
router.get('/', (req, res) => {
    db.Book.find()
      .then((books) => {
        res.render('readingdiary/profile', { books })  //books array from database 
      })
      .catch(err => {
        console.log('err', err)
        res.render('error404')
      })
  })


//GET - new movie (form) route
router.get('/new', (req, res) => {
    res.render('readingdiary/new')
})


module.exports = router
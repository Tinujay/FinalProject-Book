const router = require('express').Router()
const db = require('../models')


//GET - retreives all the new books you added in database in MongoDB and renders on readingdiary/profile
router.get('/', (req, res) => {
    db.Book.find()
      .then((books) => {
        res.render('readingdiary/profile', { books })  //books collection from database 
      })
      .catch(err => {
        console.log('err', err)
        res.render('error404')
      })
  })


//POST - creates new database form into books collection which then navigated to '/books' (your profile page)
router.post('/', (req, res) => {
    db.Book.create({
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        genre: req.body.genre,
        plot: req.body.plot,
        status: req.body.status
      })
      .then(() => {
        res.redirect('/books');
      })
      .catch((err) => {
        console.log(err);
        res.render('error404');
      });
    }); 


// GET - renders the TBR (To Be Read) page
router.get('/tbr', (req, res) => {
    db.Book.find({ status: 'TBR' })
      .then((books) => {
        res.render('readingdiary/tbr', { books });
      })
      .catch((err) => {
        console.log('err', err);
        res.render('error404');
      });
  });



//GET - new movie (form) route
router.get('/new', (req, res) => {
    res.render('readingdiary/new')
})


module.exports = router
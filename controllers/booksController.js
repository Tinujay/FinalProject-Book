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


//GET - new movie (form) route
router.get('/new', (req, res) => {
    res.render('readingdiary/new')
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
      .then((book) => {
        if (book.status === 'TBR') {
          res.redirect('/books/tbr');
        } else {
          res.redirect('/books');
        }
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



// GET request for a specific book detail
router.get('/:id', (req, res) => {
    const bookId = req.params.id;
  
    db.Book.findById(bookId)
      .then((book) => {
        if (!book) {
          // If the book is not found, you can handle it accordingly
          return res.status(404).render('error404');
        }
  
        // Render the 'readingdiary/bookDetails' view with the retrieved book data
        res.render('readingdiary/bookDetails', { book });
      })
      .catch((err) => {
        console.log(err);
        res.render('error404');
      });
  });






//GET - edit page (form) to that particular book
router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id)
        .then(book => {
            res.render('readingdiary/edit', { book})
        })
        .catch(err => {
            res.render('error404')
        })
  })


//PUT - saves changes in database and redirects to book detail page
router.put('/:id', (req, res) => {
    const { title, author, image, genre, plot, status } = req.body;
    db.Book.findByIdAndUpdate(req.params.id, { title, author, image, genre, plot, status })
      .then(() => res.redirect(`/books/${req.params.id}`))
      .catch(err => {
        console.log(err);
        res.render('error404');
      });
  });
  

module.exports = router
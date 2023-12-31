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
    .populate('reviews')
      .then((book) => {
        if (!book) {
          
          return res.status(404).render('error404');
        }
  
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



//GET - book-review (form) route
router.get('/:id/review', (req, res) => {
    const bookId = req.params.id;
    res.render('readingdiary/review', { bookId });
})
  

// POST - create a review for a specific book
router.post('/:id', (req, res) => {
    const bookId = req.params.id;

  db.Book.findById(bookId) 
  .then(book => {
    if (!book) {
        
        return res.status(404).render('error404');
      }

    db.Review.create(req.body)
        .then((review) => {
            book.reviews.push(review.id)
            book.save().then(() => {
            res.redirect(`/books/${bookId}`);
        })
    })
  })
    .catch((error) => {
    console.log(error);
    res.render('error404');
    });
});



//PUT - saves book changes in database and redirects to book detail page
router.put('/:id', (req, res) => {
    const { title, author, image, genre, plot, status } = req.body;
    db.Book.findByIdAndUpdate(req.params.id, { title, author, image, genre, plot, status })
      .then(() => res.redirect(`/books/${req.params.id}`))
      .catch(err => {
        console.log(err);
        res.render('error404');
      });
  });
  

 //DELETE - a specific book
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
  
    db.Book.findByIdAndDelete(bookId)
      .then(() => {
        res.redirect('/books'); 
      })
      .catch((err) => {
        console.log(err);
        res.render('error404'); 
      });
  });



//DELETE - deletes specific review
router.delete('/:id/reviews/:reviewId', (req, res) => {
    db.Review.findByIdAndDelete(req.params.reviewId)
      .then(() => {
        res.redirect(`/books/${req.params.id}`)
      })
      .catch(error => {
        console.log(error);
        res.render('error404')
      });
  })
   


  
module.exports = router
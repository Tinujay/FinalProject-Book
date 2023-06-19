//Connect to Mongoose 
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Book-Review', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

module.exports.Book = require('./books')
const mongoose = require('mongoose')

//Book Blueprint 
const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        default: 'images/defaultbookjpg',
      },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Currently Reading', 'Read', 'TBR'],
        required: true,
    }
});

const Book = mongoose.model('Book', bookSchema)
module.exports = Book;
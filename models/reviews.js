const mongoose = require('mongoose');

// Review Blueprint
const reviewSchema = new mongoose.Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  format: {
    type: String,
    enum: ['Book', 'E-book', 'Audiobook'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  thoughts: {
    type: String,
    required: true,
  },
  favoriteQuotes: {
    type: [String],
  },
  bookBoardImage: {
    type: String,
  },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

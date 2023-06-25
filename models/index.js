//Connect to Mongoose 
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
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
module.exports.Review = require('./reviews')
module.exports.User = require('./user')


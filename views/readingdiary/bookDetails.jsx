const React = require('react');
const Book = require('../../models/books');
const Def = require('../default');

function BookDetails(props) {
  const { book } = props;

  return (
    <Def>
      

      <main className="details-page">
       
          

      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/books">My Bookshelf 📚</a>
          </li>
          <li className="navbar-item">
            <a href="/books/new">Add New Book 🌱</a>
          </li>
          <li className="navbar-item">
            <a href="/books/tbr">My TBR 🌻</a>
          </li>
        </ul>
      </nav>

        <div className="book-details">

          <h1 className="title">{book.title}</h1>

          <div className="book-info">

            <div className="image-container">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="details-container">
              <h2 className="author">By: {book.author}</h2>
              <p className="genre"><b>Genre:</b> {book.genre}</p>
              <p className="plot"><b>Plot:</b> {book.plot}</p>
              <br></br>
              <a href={`/books/${book.id}/edit`} className="btn btn-primary edit-button">Edit Book</a>
              <br></br>
              <br></br>
              <a href={`/books/${book.id}/review`} className="btn btn-primary review-button">Write Review</a>
            </div>

          </div>

        </div>

      </main>
    </Def>
  );
}

module.exports = BookDetails;



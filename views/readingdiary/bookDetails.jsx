const React = require('react');
const Book = require('../../models/books');
const Def = require('../default');

function BookDetails(props) {
  const { book } = props;

  return (
    <Def>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/books">My Bookshelf</a>
                </li>
                <li className="navbar-item">
                    <a href="/books/new">Add New Book</a>
                </li>
                <li className="navbar-item">
                    <a href="/books/tbr">My TBR</a>
                </li>
            </ul>
        </nav>

      <main>
        <div className="book-details">

          <h1 className="title">{book.title}</h1>

          <div className="book-info">
            <div className="image-container">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="details-container">
              <h2 className="author">By: {book.author}</h2>
              <p className="genre">Genre: {book.genre}</p>
              <p className="plot">Plot: {book.plot}</p>
              <a href={`/books/${book.id}/edit`} className="btn btn-primary edit-button">Edit Book</a>


            </div>
          </div>

        </div>

      </main>
    </Def>
  );
}

module.exports = BookDetails;



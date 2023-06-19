const React = require('react');
const Def = require('../default');

function TBR(props) {
    const {books} = props;

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
      {books.map((book) => (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <p>Status: {book.status}</p>
          </div>
        ))}
      </main>

    </Def>
  );
}

module.exports = TBR;

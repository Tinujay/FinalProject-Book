
const React = require('react');
const Def = require('../default');

function Profile(props) {
  const { books } = props;

  const currentlyReading = books.filter((book) => book.status === 'Currently Reading');
  const readBooks = books.filter((book) => book.status === 'Read');

  const totalCurrentlyReading = currentlyReading.length;
  const totalReadBooks = readBooks.length;

  return (
    <Def>
      <main className="profile-page" 
        style={{
            backgroundImage: "url(/images/profile.jpg)", 
            width: "100%", 
            height: "100%",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
          }}>

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

      <div className="bookshelf">

        <div className="shelf-section">
          <h2 className="profile-section-title">Currently Reading ({totalCurrentlyReading}) </h2>
            <div className="bookshelf-books">
              {currentlyReading.map((book) => (
                <a key={book._id} href={`/books/${book._id}`} className="book-card">
                  <h3>{book.title}</h3>
                  <p>By: {book.author}</p>
                  <img
                    src={book.image || '/images/defaultbook.jpg'}
                    alt={book.title}
                  />
                </a>
              ))}
            </div>
        </div>

        <div className="shelf-section">
          <h2 className="profile-section-title">Read ({totalReadBooks}) </h2>
            <div className="bookshelf-books">
              {readBooks.map((book) => (
                <a key={book._id} href={`/books/${book._id}`} className="book-card">
                  <h3>{book.title}</h3>
                  <p>By: {book.author}</p>
                  <img
                    src={book.image || '/images/defaultbook.jpg'}
                    alt={book.title}
                  />
                </a>
              ))}
            </div>
        </div>

      </div>

     </main>
    </Def>
  );
}

module.exports = Profile;

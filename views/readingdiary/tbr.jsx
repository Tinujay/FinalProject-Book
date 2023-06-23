const React = require('react');
const Def = require('../default');

function TBR(props) {
    const {books} = props;

  return (
    <Def>
  
      <main style={{
        backgroundImage: "url(/images/tbr1.jpg)", 
        width: "100vw", 
        height: "100vh",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
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
      
      <br></br>

        <h1 className="tbr-title">Upcoming Reads:</h1>
        <div className='tbr-list'>
            {books.map((book) => (
                <div key={book._id} className="tbr-book">
                  <a href={`/books/${book._id}`}>
                    <h2>{book.title}</h2>
                    <p>By: {book.author}</p>
                    <img
                        src={book.image || '/images/defaultbook.jpg'}
                        alt={book.title}
                    />
                  </a>
                </div>
            ))}
        </div>

      </main>

    </Def>
  );
}

module.exports = TBR;

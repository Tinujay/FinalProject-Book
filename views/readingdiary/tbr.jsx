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

      <main style={{backgroundImage: "url(/images/tbr.jpg)", height: "110vh", width: "100vw", backgroundRepeat: "repeat"}}>
        <h1 className="tbr-title">My TBR List</h1>
        <div className='tbr-list'>
            {books.map((book) => (
                <div key={book._id}>
                    <h2>{book.title}</h2>
                    <p>By: {book.author}</p>
                    <img
                        src={book.image || '/images/defaultbook.jpg'}
                        alt={book.title}
                    />
                    <p>Status: {book.status}</p>
                </div>
            ))}
        </div>
      </main>

    </Def>
  );
}

module.exports = TBR;

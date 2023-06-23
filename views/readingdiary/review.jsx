const React = require('react');
const Def = require('../default');
const book = { _id: 'bookId' };

function Review() {
  return (
    <Def>
      <main
        style={{
          backgroundImage: "url(/images/addbook1.jpg)",
          width: "100%",
          height: "100%",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
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

        <form className="form-container" method="POST" action={`/books/${book._id}/review`}>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input className="form-control" type="date" id="startDate" name="startDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input className="form-control" type="date" id="endDate" name="endDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="format">Format:</label>
            <select className="form-control" id="format" name="format">
              <option value="">Select a format</option>
              <option value="Book">Book</option>
              <option value="E-book">E-book</option>
              <option value="Audiobook">Audiobook</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input className="form-control" type="number" id="rating" name="rating" min="1" max="5" required />
          </div>
          <div className="form-group">
            <label htmlFor="mood">Mood:</label>
            <select className="form-control" id="mood" name="mood">
              <option value="">Select a mood</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Spicy">Spicy</option>
              <option value="Sad-Crying">Sad-Crying</option>
              <option value="Boring">Boring</option>
              <option value="Happy-Tears">Happy-Tears</option>
              <option value="Mad">Mad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="thoughts">Thoughts:</label>
            <textarea className="form-control" id="thoughts" name="thoughts" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="favoriteQuotes">Favorite Quotes:</label>
            <textarea className="form-control" id="favoriteQuotes" name="favoriteQuotes"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="bookBoardImage">Book Board Image:</label>
            <input className="form-control" type="url" id="bookBoardImage" name="bookBoardImage" pattern="^https?://.*$" />
            <p>Make sure it is a valid URL*</p>
          </div>
          <button className="btn btn-primary" type="submit">Add Book Review</button>
        </form>

      </main>
    </Def>
  );
}

module.exports = Review;


const React = require('react');
const Def = require('../default');

function Review({ bookId }) {
    const book = { _id: bookId };

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

        <form className="form-container" method="POST" action={`/books/${book._id}`}>
            <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input className="form-control" type="date" id="startDate" name="startDate"/>
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input className="form-control" type="date" id="endDate" name="endDate"/>
            </div>
            <div className="form-group">
                <label htmlFor="format">Format:</label>
                    <div className="checkbox-container">
                        <label className="checkbox-label" htmlFor="bookFormat">
                            <input type="checkbox" id="bookFormat" name="format" value="Book" />
                            <span className="checkbox-icon">Book</span>
                        </label>
                        <label className="checkbox-label" htmlFor="eBookFormat">
                            <input type="checkbox" id="eBookFormat" name="format" value="E-book" />
                            <span className="checkbox-icon">E-book</span>
                        </label>
                        <label className="checkbox-label" htmlFor="audiobookFormat">
                            <input type="checkbox" id="audiobookFormat" name="format" value="Audiobook" />
                            <span className="checkbox-icon">Audiobook</span>
                        </label>
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                    <select className="form-control" id="rating" name="rating" required>
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
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


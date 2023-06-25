const React = require('react');
const Def = require('../default');

function BookDetails(props) {
  const { book } = props;

  const getStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} className="star filled-star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  };

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
              <br></br>
              <br></br>
              <form method="POST" action={`/books/${book.id}?_method=DELETE`}>
                  <button type="submit" className="delete-button">
                    Delete
                  </button>
              </form>
            </div>
          </div>

        </div>


        <div className="review-section">
  {book.reviews.length > 0 ? (
    <ul className="review-list">
      {book.reviews.map((review) => (
        <li key={review._id} className="review-item">
          <h2 className="book-review">Book Review</h2>
          <div className="review-rating">
                    <p><b>Rating:</b></p>
                    {getStarRating(review.rating)}
          </div>
          <div className="review-dates">
          <p><b>Start Date:</b> {review.startDate ? review.startDate.toLocaleDateString() : ''}</p>
            <p><b>End Date:</b> {review.endDate ? review.endDate.toLocaleDateString() : ''}</p>
          </div>
          <div className="review-thoughts">
            <p><b>Thoughts:</b></p>
            <p>{review.thoughts}</p>
          </div>
          <div className="review-quotes">
            <p><b>Favorite Quotes:</b></p> 
            <p>{review.favoriteQuotes.join(', ')}</p>
          </div>
         
          <p><b>Book Board:</b></p>
          <div className="review-book-board">
          {review.bookBoardImage && (
            <img src={review.bookBoardImage} alt="Book Board" />
          )}
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews available.</p>
  )}
</div>

<br></br>



      </main>
    </Def>
  );
}

module.exports = BookDetails;



const React = require('react')
const Def = require('../default')

function newBookReview () {
    return (
        <Def>
            <main style={{backgroundImage: "url(/images/newbookreview.jpg)", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h1 className="new-review-title">Add Your Book Review Here!</h1>
                <form className="review-form">
                    <div>
                        <label htmlFor="book-title">Title:</label>
                        <input type="text" id="book-title" />
                    </div>
                    <div>
                        <label htmlFor="author-name">Author:</label>
                        <input type="text" id="author-name" />
                    </div>
                    <div>
                        <label htmlFor="book-image">Image URL:</label>
                        <input type="text" id="book-image" />
                    </div>
                    <div>
                        <label htmlFor="book-genre">Genre:</label>
                        <input type="text" id="book-genre" />
                    </div>
                    <div>
                        <label htmlFor="book-plot">Plot:</label>
                        <textarea id="book-plot" rows="5"></textarea>
                    </div>
                    <div>
                        <label htmlFor="book-review">Review:</label>
                        <textarea id="book-review" rows="5"></textarea>
                    </div>
                    <div>
                        <label htmlFor="book-rating">Rating:</label>
                        <select id="book-rating">
                            <option value="">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = newBookReview


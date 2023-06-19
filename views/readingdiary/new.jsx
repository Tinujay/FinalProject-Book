const React = require('react')
const Def = require('../default')

function newBookReview () {
    return (
        <Def>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">My Bookshelf</li>
                    <li className="navbar-item">TBR</li>
                    <li className="navbar-item">Add Book</li>
                </ul>
            </nav>

            <main style={{backgroundImage: "url(/images/addbook.jpg)", width: "100vw", backgroundRepeat: "repeat"}}>
            
                <form className="review-form">
                <h1 className="new-review-title">Expand Your Bookshelf !</h1>
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
                        <label htmlFor="book-status">Status:</label>
                        <select id="book-status">
                            <option value="">Select Status</option>
                            <option value="currently-reading">Currently Reading</option>
                            <option value="read">Read</option>
                            <option value="tbr">TBR (To Be Read)</option>
                        </select>
                    </div>
                    <div class="button-container">
                        <button type="submit" class="submit-button">Add Book!</button>
                    </div>
                </form>
            </main>

        </Def>
    )
}

module.exports = newBookReview


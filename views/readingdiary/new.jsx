const React = require('react')
const Def = require('../default')

function newBook () {
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

            <main style={{backgroundImage: "url(/images/addbook.jpg)", width: "100vw", backgroundRepeat: "repeat"}}>
            
                <form className="form-container" method="POST" action="/books">
                    <div className="form-group">
                        <label htmlFor="title">Book Title</label>
                        <input className="form-control" id="title" name="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Book Cover Image</label>
                        <input className="form-control" id="image" name="image" pattern="^https?://.*$" />
                        <p>Make sure it is a valid URL*</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input className="form-control" id="genre" name="genre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="plot">Plot</label>
                        <textarea className="form-control" id="plot" name="plot"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                            <select className="form-control" id="status" name="status" required>
                                <option value="">Select a status</option>
                                <option value="Currently Reading">Currently Reading</option>
                                <option value="Read">Read</option>
                                <option value="TBR">TBR (To Be Read)</option>
                            </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Add Book</button>
                </form>

            </main>

        </Def>
    )
}

module.exports = newBook


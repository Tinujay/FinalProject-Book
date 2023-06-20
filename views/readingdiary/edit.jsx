const React = require('react');
const Def = require('../default');

function EditBook(props) {
  const { book } = props;

  return (
    <Def>
      <main className="editpage" style={{backgroundImage: "url(/images/books.jpg)", height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1>Edit Book:</h1>
        <form className="edit-form form-container" method="POST" action={`/books/${book._id}?_method=PUT`}>
  <div className="form-group">
    <label htmlFor="title">Book Title</label>
    <input className="form-control" type="text" id="title" name="title" defaultValue={book.title} required />
  </div>
  <div className="form-group">
    <label htmlFor="author">Author</label>
    <input className="form-control" type="text" id="author" name="author" defaultValue={book.author} required />
  </div>
  <div className="form-group">
    <label htmlFor="image">Book Cover Image</label>
    <input className="form-control" type="url" id="image" name="image" defaultValue={book.image || ""} pattern="^https?://.*$"/>
    <p>Make sure it is a valid URL*</p>
  </div>
  <div className="form-group">
    <label htmlFor="genre">Genre</label>
    <input className="form-control" type="text" id="genre" name="genre" defaultValue={book.genre}/>
  </div>
  <div className="form-group">
    <label htmlFor="plot">Plot</label>
    <textarea className="form-control" id="plot" name="plot" defaultValue={book.plot}></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="status">Reading Status</label>
    <select className="form-control" id="status" name="status" defaultValue={book.status} required>
      <option value="">Select a status</option>
      <option value="Currently Reading">Currently Reading</option>
      <option value="Read">Read</option>
      <option value="TBR">TBR (To Be Read)</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Save Changes</button>
</form>

      </main>
    </Def>
  );
}

module.exports = EditBook;

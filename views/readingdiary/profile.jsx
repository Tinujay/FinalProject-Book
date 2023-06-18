const React = require('react');
const Def = require('../default');

function Profile() {
    const userName = "Tinu J.";  //have to change the name accroding to the user who logged in

    return (
        <Def>
            <main className="profile-page" style={{backgroundImage: "url(/images/.jpg)", minheight: "110vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h1 className="profile-title">{userName}'s Bookshelf</h1>
                <ul className="book-list">
                    {/* Render the list of books here after they fill out the form*/}
                </ul>
            </main>
        </Def>
    );
}

module.exports = Profile;
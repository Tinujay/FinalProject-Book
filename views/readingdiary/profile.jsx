const React = require('react');
const Def = require('../default');

function Profile() {
    const userName = "Tinu J.";
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

            <main className="profile-page" style={{backgroundImage: "url(/images/profile.jpg)", minHeight: "110vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
            
            </main>

        </Def>
    );
}

module.exports = Profile;
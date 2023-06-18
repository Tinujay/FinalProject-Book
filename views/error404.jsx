const React = require('react');
const Def = require('./default');

function Error404 () {
    return (
        <Def>
            <main style={{ textAlign: 'center', paddingTop: '30px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Oops!</h1>
                <p style={{ fontSize: '20px' }}>The page you are looking for could not be found.</p>
                <img src="/images/error.jpg" alt="Error 404" style={{ width: '300px', marginTop: '40px' }} />
                <p style={{ fontSize: '16px', marginTop: '40px' }}>
                    Please navigate back to a valid page.
                </p>
                <a href="/" style={{ fontSize: '18px', textDecoration: 'underline' }}>Go back to Home</a>
            </main>
        </Def>
    );
}

module.exports = Error404;

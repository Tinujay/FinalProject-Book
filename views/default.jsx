const React = require('react')

function Def (html) {
    return (
        <html>
            
            <head>
                <title>BookReview</title>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>

            <body>

             {html.children}

             <footer>
                <p>&copy; 2023 Book Review</p>
            </footer>
            
            </body>

        </html>
    )
}

module.exports = Def 
const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>BookReview</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Alice&family=Bebas+Neue&display=swap" rel="stylesheet"></link>
            </head>

            <body>

             {html.children}
            
            </body>

        </html>
    )
}

module.exports = Def 
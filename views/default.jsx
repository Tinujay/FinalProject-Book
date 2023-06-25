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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
            </head>

            <body>

             {html.children}
            
            </body>

        </html>
    )
}

module.exports = Def 
const GameView = require("./gameview")

document.addEventListener('DOMContentLoaded', function (){

    let matches = Array.from(document.getElementsByClassName('match'))
    console.log(matches)
    matches.forEach( match => {
        match.addEventListener('mousedown', function(e) {
            e.preventDefault()
            // console.log('smelly')
            match.classList.toggle('selected')
        } )
    })

    new GameView().start()
} )


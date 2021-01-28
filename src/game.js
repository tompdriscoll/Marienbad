const Row = require('./row')

let matches = Array.from(document.getElementsByClassName('match'))
console.log(matches)
matches.forEach( match => {
    match.addEventListener('mousedown', function(e) {
        
        e.preventDefault()
        match.classList.toggle('selected')
    } )
})

function Game(){
    this.board = [new Row(0), new Row(1), new Row(2), new Row(3)]
    this.player1 = 'human'
    this.player2 = 'computer'
    this.currentPlayer = this.player1
    this.selected = []
    this.nimSum = 0;
}

Game.prototype.turn = function turn(){
    if (this.currentPlayer = this.player1){
        
    }
}


module.exports = Game;
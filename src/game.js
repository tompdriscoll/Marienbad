const Row = require('./row')

function Game(){
    this.board = [new Row(0), new Row(1), new Row(2), new Row(3)]
    this.player1 = 'human'
    this.player2 = 'computer'
    this.currentPlayer = this.player1
    this.nimSum = 0;
}

Game.prototype.turn = function turn(){

}


module.exports = Game;
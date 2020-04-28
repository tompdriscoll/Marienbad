const Row = require('./row')
function Game(){
    this.board = [new Row(1), new Row(3), new Row(5), new Row(7)]
}



module.exports = Game;
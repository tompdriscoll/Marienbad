const Game = require('./game')

function Gameview(){
    this.game = null
}

Gameview.prototype.start = function start(){
    this.game = new Game()
}

module.exports = Gameview
const Match = require('./match')


function Row(number){
    this.number = number
    this.matches = []
}

Row.prototype.populate = function populate(){
    let times = this.number
    while (time) {
        this.matches << new Match
        times -= 1
    }
}

module.exports = Row
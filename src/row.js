const Match = require('./match')


function Row(number){
    this.id = number
    this.matches = this.populate()
    this.empty = false    
    this.frontend = document.getElementsByClassName('match-row')[this.id]
}

Row.prototype.populate = function populate(){
    let times = this.id * 2 + 1
    let matchArray = []
    while (times) {
        matchArray.push(new Match())
        times -= 1
    }
    return matchArray
}

module.exports = Row


function Match(id){
    this.id = id
    this.removed = false
    this.selected = false
    this.frontend = document.getElementsByClassName('match')[id]
}

Match.prototype.select = function select(){
    
}

module.exports = Match;
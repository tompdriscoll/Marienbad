

function Match(id,rowId){
    this.id = id
    this.rowId = rowId
    this.removed = false
    this.selected = false
    this.frontend = document.getElementsByClassName('match')[id]
}

Match.prototype.select = function select(){
    
}

module.exports = Match;
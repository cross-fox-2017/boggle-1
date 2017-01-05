class BoogleBoard{
  constructor(panjang, lebar){
    this.panjang = panjang;
    this.lebar = lebar
    this.board = []
  }
  shake(){
    for (let i = 0; i < this.panjang; i++) {
      this.board[i] = []
      for (let j = 0; j < this.lebar; j++){
        this.board[i].push("A")
      }
    }
    return this.board
  }
}

var papan = new BoogleBoard(4,4)
console.log(papan.shake());

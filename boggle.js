"use strict"

class Board {
  constructor() {
    // this.panjang = panjang;
    // this.lebar = lebar;
    this.board = [];
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  shake(panjang, lebar) {
    for (let i = 0; i < panjang; i++) {
      this.board.push([]);
      for (let j = 0; j < lebar; j++) {
        let random = Math.floor(Math.random() * 26);
        console.log(random)
        this.board[i].push(this.alphabet[random]);
      }
    }
    return this.board
  }

}

var board = new Board()
console.log(board.shake(10,10))

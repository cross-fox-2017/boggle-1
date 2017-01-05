// "use strict"
//
// class Boggle {
//   constructor() {
//     this._table = []
//   }
//
//   generate(value){
//     for (var i = 0; i < value; i++) {
//       this._table.push([])
//       for (var j = 0; j < value; j++) {
//         this._table[i].push([])
//       }
//     }
//   }
//
//   insert(){
//     for (var i = 0; i < this._table.length; i++) {
//       for (var j = 0; j < this._table.length; j++) {
//         this._table[i][j] = this.shake()
//       }
//     }
//   }
//
//   random(){
//     var random = Math.floor(Math.random()* 25)
//     return random
//   }
//
//   shake(){
//     var alphabets = []
//     for (var i = 65; i <= 90; i++) {
//       alphabets.push(String.fromCharCode(i))
//     }
//     return alphabets[this.random()]
//     // var alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
//     // return alphabets[this.random()]
//   }
//
//   playBoggle(value){
//     this.generate(value)
//     this.insert()
//     console.log(this._table);
//   }
//
// }
//
// var boggle1 = new Boggle()
//
// boggle1.playBoggle(5)


// "use strict"

class Boggle1 {
  constructor() {
    this.board = []
    this.alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  }

  shake(a, b){
    for (var i = 0; i < a; i++) {
     this.board.push([])
     for (var j = 0; j < b; j++) {
       let random = Math.floor(Math.random() * 26)
       this.board[i].push(this.alphabets[random])
     }
    }
    return this.board
  }
}

let boggle1 = new Boggle1()

console.log(boggle1.shake(5,5));

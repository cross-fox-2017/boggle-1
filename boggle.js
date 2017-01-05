// class BoggleBoard {
//   constructor(){
//     this.data = data;
//     this.board = [];
//     this.random(0,26){
//         return Math.random() * (max - min) + min;
//     }
//   }
//   getAlpha(alpha){
//     this.data = alpha;
//   }
//   getShake(n){
//     for(let i =0 ; i < n ;i++){
//       let temp = [];
//       for(let j = 0; j<n; j++){
//         temp.push(alpha[Math.floor( (0,26){})]);
//       }
//       this.board.push(temp);
//     }
//   }
//
// }


var alpha = ['A','B','C','D','E','F','G','H','I','J',
'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var board = [];

function shake(n){
  for(let i =0 ; i < n ;i++){
    let temp = [];
    for(let j = 0; j<n; j++){
      temp.push(alpha[Math.floor(getRandomArbitrary(0,26))]);
    }
    board.push(temp);
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

shake(4);
//shake(5);
console.log(board);

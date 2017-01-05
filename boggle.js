let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
              'O','P','Q','R','S','T','U','V','W','X','Y','Z'];


class BoggleBoard {
  constructor(num) {
    this.num = num;
  }

  shake(){
    let arrBoard = [];
    for(let i = 0; i < this.num; i++){
      let row = []
      for (let j = 0; j < this.num; j++) {
        let randomNum = Math.floor(Math.random() * alpha.length);
        row.push(alpha[randomNum]);
      }
      arrBoard.push(row)
    }
    return arrBoard;
  }

}
let chekBoard = new BoggleBoard(7)
console.log(chekBoard.shake());

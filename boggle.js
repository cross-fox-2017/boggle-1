class BoggleBoard {
  constructor(){
    this.boggleBoard = []
  }

  shake(x){
    let huruf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // huruf import dari data.js
    let randomIndex = Math.floor(Math.random() * 26);

    // for limit ganti agar dinamis 4 * 4
    for(let i = 0; i < x; i++){
      let arr = [];
      this.boggleBoard.push(arr);
      for(let j = 0; j < x; j++){
        this.boggleBoard[i].push(huruf[randomIndex]);
        randomIndex = Math.floor(Math.random() * 26);
      }
    }
    return this
  }

  print(){
    return console.log(this.boggleBoard);
  }
}

let boggleBoard = new BoggleBoard();
boggleBoard.shake(5).print();

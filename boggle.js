class BoggleBoard{

  constructor(main,value){
        this.main = main;
        this.value = value;
  }

      shake(){
        var board = [];

        var alpabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','y','Z'];

        for(let x = 0; x < this.main; x++){
                var arr = [];
              board.push(arr);
              for(let y = 0; y < this.value ;y++){
                  let index = Math.floor(Math.random() * (alpabet.length - 1));
                  board[x][y] = alpabet[index];
              }
        }
        return board;
      }
}
var san = new BoggleBoard(5,5);
console.log(san.shake());

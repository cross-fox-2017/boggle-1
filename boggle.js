class BoggleBoard{
  constructor(num, sides){
    this.num   = num;
    this.sides = sides;
  }

  shake(){
    var main     = [];
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'
                   ,'P','Q','R','S','T','U','V','W','X','Y','Z'];

    for(var i = 0; i < this.num; i++){
      var temp = [];
      main.push(temp);
      for(var j = 0; j < this.sides; j++){
        var randomAlphabet = Math.floor(Math.random() * (alphabet.length - 1));
        main[i][j] = alphabet[randomAlphabet];
      }
    }
    return main;
  }
}

var play = new BoggleBoard(4,4);
console.log(play.shake(4));

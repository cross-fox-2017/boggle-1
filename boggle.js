class BoogleBoard {
  constructor () {
    this.arr = []
  }
  // method untuk bikin kotak amal
  // kotak amal akan di isi huruf random dari A - Z
  board(input) {
    for (var i = 0; i < input; i++ ) {
      // mengisi dimensi kotak amal sesuai dengan angka input
      this.arr.push([])
      for (var j = 0; j < input; j++) {
        var angka = Math.floor(Math.random() * ( 90 - 65 + 1 ) ) + 65;
        var abjad = String.fromCharCode( angka )
        // isi abjad ke setiap index kotak amal
        this.arr[i].push( abjad );
      }
    }
    // tampilkan kotak amal
    console.log( this.arr );
  }
}

var kotak = new BoogleBoard();
kotak.board(4)

class boggle {
    constructor() {
        this.boggleBoard = [];
        this.huruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }

    shake(panjang, lebar) {
        for (var i = 0; i < panjang; i++) {
            let arr = []
            this.boggleBoard.push(arr)


            for (var j = 0; j < lebar; j++) {
                let randomHuruf = this.huruf[Math.floor(Math.random() * 26)]
                    // console.log(randomHuruf)
                this.boggleBoard[i].push(randomHuruf)
            }
        }
        return this.boggleBoard
    }
}

var board = new boggle()
console.log(board.shake(4, 4))

"use strict"

// import Data from "./data.js"
class BoggleBoard {
	constructor (width, height) {
		this.width	= width
		this.height	= height
		this.data   = []
	}

	shake(){
		for(let j=0; j<this.width; j++) {
			this.data[j] = []
			for(let k=0; k<this.height; k++) {
				this.data[j].push(this.random())
			}
		}
		return this.data
	}

	random(){
		return String.fromCharCode(Math.floor(Math.random()*26)+65)
		//(max-min + 1)+min (huruf A=65; huruf Z=90)
	}
}

var game = new BoggleBoard(6,7)
console.log(game.shake())

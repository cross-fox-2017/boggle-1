function shake(num){
	var arr = [];
	let dimensi = num*num;
	
	for (var idx='A'.charCodeAt(0), end='Z'.charCodeAt(0); idx<=end; ++idx){
		arr.push(String.fromCharCode(idx))
	}
	// console.log(arr);
	let boggle = [];

	for(let i=0; i<dimensi; i++){
		boggle.push(arr[Math.floor(Math.random() * arr.length)])	
	}

	var letter_grid = [];
	var i, j, chunk = num;

	for(i=0, j=boggle.length; i<j; i+=chunk){
		letter_grid.push(boggle.slice(i, i+chunk));
	}
	return console.log(letter_grid);
}

shake(4);
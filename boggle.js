function shake (num){
var array = []
var boogleArr = []

	for (var a = "A".charCodeAt(0), end="Z".charCodeAt(0); a <= end; a++){
	array.push(String.fromCharCode(a));
		}
for(var i = array.length -1; i>0; i--){
	var j= Math.floor(Math.random()*(i+1));
	var temp = array[i];
	array[i] = array [j];
	array[j] = temp;
}

for(var i=0, j=num*4; i < j; i+=4){
boogleArr.push(array.slice(i, i+4))
	}
	return boogleArr;
}
console.log(shake(4));
function shake(num,num2){
  let array = [];
  let arrayBoggle = [];
  let chunk = num;
  for(var idx="A".charCodeAt(0), end="Z".charCodeAt(0); idx <= end; idx++){
    array.push(String.fromCharCode(idx));
  }

  for(var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (i=0, j=num*num2; i < j; i+= chunk){
    arrayBoggle.push(array.slice(i, i+chunk))
  }

  return arrayBoggle;
}

console.log(shake(4,5));

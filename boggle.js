/*class boogle{
  var papan =[];
  var huruf=['a','b','c']

  for(var i = 0; i < 3; i++){
    papan.push("O")
    for(var i =0; i<3; i++){
      papan.push("O")
    }
  }
  return papan;
}
*/

class boggle{

      shake(){
        var papan = [];

        var alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

        for(let x = 0; x < 4; x++){
                var arr = [];
              papan.push(arr);
              for(let y = 0; y < 4;y++){
                let random = Math.floor(Math.random() * 26)
                papan[x].push(alphabets[random])
              }
        }
        return papan;
      }
}
var text = new boggle;
console.log(text.shake());

class boogle{
  constructor(box){
    this.box= [];
  }
  shake(num){
    var box=[]
    var isi='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i=0;i<num;i++){
      box.push([])
    }
    for(var i=0;i<box.length;i++){
      for(var j=0;j<box.length;j++)
      box[i].push(isi[Math.floor(Math.random()*isi.length)])

    }
    return box;
  }
}

var newbog= new boogle();
console.log(newbog.shake(4));

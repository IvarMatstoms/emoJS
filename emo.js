emojifunctions=[]
function emoji(emoji) {
  if(/^[a-zA-Z]+$/.test(emoji)){
    //text
    //console.log("text")
    var i=0;
    while (i<emojifunctions.length){
    if (emoji == emojifunctions[i]["name"]) {
      return emojifunctions[i]["function"]
    }
    i=i+1
  }
  }else{
    //emoji
  var hex=emoji.hexEncode()
  var i=0;
  while (i<emojifunctions.length){
  if (emoji.hexEncode() == emojifunctions[i]["hexcode"] || emoji.hexEncode()==emojifunctions[i]["emoji"].hexEncode()) {
    return emojifunctions[i]["function"]
  }
  i=i+1
}
}
}

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}
String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}

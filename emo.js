emojifunctions=[]
function emoji(emoji) {
  var hex=emoji.hexEncode()
  var i=0;
  while (i<emojifunctions.length){
  if (emoji.hexEncode() == emojifunctions[i]["hexcode"]) {
    return emojifunctions[i]["function"]
  }
  i=i+1
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

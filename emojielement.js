function getEmojiElement(id){
  return function(emoji){

    function getDOM(ele){
        ele=ele||element
        if(typeof ele=="function"){
          return ele("📁")
        }else{
          return ele
        }
    }
    var element=document.getElementById(id)
    var hex=emoji.hexEncode()
    if(hex=="d83edd30"){
        return function(element){
          getDOM().appendChild(getDOM(element))
        }
    }else if(hex=="d83ddcc1"){
        return element
    }else if(hex=="270f"){
      return function (attr,value){
        getDOM().setAttribute(attr,value)
      }
      //📃
    }else if(hex=="d83ddcc3"){
      return function (value){
        getDOM().innerHTML=value
      }
    }


    return element
  }
}

function getEmojiElement(id){
  return function(emoji){

    function getDOM(ele){
        if(typeof ele=="undefined"){
          return elements
        }
        if(typeof ele=="function"){
          //console.log(ele)
          //console.log(ele("📁"))
          //console.log(ele("getDOM"))
          return ele("getDOM")
        }else if (typeof ele=="object"){
          return [ele]
        }
    }
    //var eleemnts=null
    if (Array.isArray(id)){
    var elements=id
    }else if(typeof id=="object"){
    var elements=[id]
    }else{
    var elements=document.querySelectorAll(id)
    }
    //console.log(elements)
    var hex=emoji.hexEncode()
    //📛
    if(hex=="d83ddcdb" || emoji=="id"){
      return function(id){
      getDOM()[0].id=id
      return getEmojiElement(elements)
    }
    }
    //🤰
    if(hex=="d83edd30" || emoji=="append"){
        return function(element){
          //console.log(getDOM(element))
          var i=0
          var elelist=getDOM(element)
          mainele=getDOM()[0]
          while (i<elelist.length){
          mainele.appendChild(elelist[i])
          i=i+1;
        }
      }
    }else if(hex=="d83ddcc1" || emoji=="getDOM"){
        //console.log(getDOM())
        return getDOM()
    }else if(hex=="270f" || emoji=="attr"){
      return function (attr,value){
        var i=0;
        while (i<elements.length){
        elements[i].setAttribute(attr,value)
        i+=1
      }
      return getEmojiElement(elements)
      }
      //📃
    }else if(hex=="d83ddcc3" || emoji=="text"){
      return function (value){
        var i=0;
        while (i<elements.length){
        elements[i].innerHTML=value
        i+=1
      }
      return getEmojiElement(elements)
      }
    }
    //return this


    //return elements
  }
}

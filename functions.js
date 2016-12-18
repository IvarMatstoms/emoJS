emojifunctions.push({"hexcode":"d83dde02","function":function(data){
  console.log(data)
}})

//🔠
emojifunctions.push({"hexcode":"d83ddd20","name":"uppercase","function":function(data){
  console.log(data.toUpperCase())
}})
//POST
emojifunctions.push({"hexcode":"d83cdfe4","name":"post","function":function(url,data,callback){
  emojirequest(url,data,callback,"POST")
}})
//GET
emojifunctions.push({"hexcode":"d83ddc15","name":"get","function":function(url,data,callback){
  emojirequest(url,data,callback,"GET")
}})

//element by query
emojifunctions.push({"hexcode":"d83ddd0d","name":"find","function":function(id){
  return getEmojiElement(id)
}})

emojifunctions.push({"hexcode":"d83ddca1","name":"create","function":function(tag,attr,inner){
  var ele=document.createElement(tag)
  if(typeof attr=="object"){
    //console.log(keys(attr))
  var k=keys(attr)
  var i=0
  while (i<k.length){
    ele.setAttribute(k[i],attr[k[i]])
    i=i+1
  }
  }
  if(typeof inner=="string"){
    ele.innerHTML=inner
  }
  //console.log(getEmojiElement(ele))
  return getEmojiElement(ele)
}})

emojifunctions.push({"hexcode":"d83dde02","function":function(data){
  console.log(data)
}})

emojifunctions.push({"hexcode":"d83dde03","function":function(data){
  console.log(data.toUpperCase())
}})
//POST
emojifunctions.push({"hexcode":"d83cdfe4","function":function(url,data,callback){
  emojirequest(url,data,callback,"POST")
}})
//GET
emojifunctions.push({"hexcode":"d83ddc15","function":function(url,data,callback){
  emojirequest(url,data,callback,"GET")
}})

//element by id
emojifunctions.push({"hexcode":"d83ddd0d","function":function(id){
  return getEmojiElement(id)
}})

emojifunctions.push({"hexcode":"d83ddca1","function":function(tag){
  return document.createElement(tag)
}})

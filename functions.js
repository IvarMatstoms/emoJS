emojifunctions.push({"hexcode":"d83dde02","emoji":"😂","function":function(data){
  console.log(data)
}})

//🔠
emojifunctions.push({"hexcode":"d83ddd20","name":"uppercase","emoji":"🔠","function":function(data){
  console.log(data.toUpperCase())
}})
//POST
emojifunctions.push({"hexcode":"d83cdfe4","name":"post","emoji":"🏤","function":function(url,data,callback){
  emojirequest(url,data,callback,"POST")
}})
//GET
emojifunctions.push({"hexcode":"d83ddc15","name":"get","emoji":"🐕","function":function(url,data,callback){
  emojirequest(url,data,callback,"GET")
}})

//element by query
emojifunctions.push({"hexcode":"d83ddd0d","name":"find","emoji":"🔍","function":function(id){
  return getEmojiElement(id)
}})

emojifunctions.push({"hexcode":"d83ddca1","name":"create","emoji":"💡","function":createEmojiElement
})

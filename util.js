function emojirequest(url,data,callback,method){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if (xhttp.readyState == 4 && xhttp.status == 200){
  callback(xhttp.responseText)
  }
}
if(method=="GET"){
xhttp.open(method, url+emojicreateUrl(data), true);
}else{
  xhttp.open(method, url, true);
}
if(method=="POST"){
var i=0;
var keyset=keys(data)
var fdata = new FormData();
while (i<keyset.length){
  fdata.append(keyset[i], data[keyset[i]]);
  i=i+1
}
//console.log(fdata)
xhttp.send(fdata);
}else{
  xhttp.send();
}
}

function emojicreateUrl(data){
  res=""
  var keyset=keys(data)
  var urlvars=[]
  if(keyset.length>0){
    res=res+"?"
  }
  var i=0;
  while(i<keyset.length){
    urlvars.push(keyset[i]+"="+data[keyset[i]])
    i=i+1
  }
  res=res+urlvars.join("&")
  return res
}

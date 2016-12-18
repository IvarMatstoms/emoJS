import requests
files=["emo.js","util.js","emojielement.js","elementbuilder.js","functions.js"]
jstot=""
for file in files:
	f=open(file,"r")
	jstot+=f.read()+"\n"
	f.close()
url="http://closure-compiler.appspot.com/compile"
data={"js_code":jstot,"compilation_level":"SIMPLE_OPTIMIZATIONS","output_info":"compiled_code","output_format":"text"}
r=requests.post(url,data=data,allow_redirects=True)

f=open("emoJS.min.js","w")
f.write(r.content)
f.close()

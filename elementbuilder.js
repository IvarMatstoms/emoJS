function createEmojiElement(tag,attr,inner){
  return getEmojiElement(createEmojiElementDom(tag,attr,inner))

}
function createEmojiElementDom(tag, attr, inner) {
    if(Array.isArray(tag) && typeof tag[0]=="object"){

         eles=[]
         for (var t2=0;t2<tag.length;t2++){
        Array.prototype.push.apply(eles,createEmojiElementDom(tag[t2][0],tag[t2][1],tag[t2][2]))
         }
    }else{
    attr = attr || [{}]
    inner = inner || [null]

    if (!Array.isArray(tag)) {
        tag = [tag]
    }
    if (!Array.isArray(attr)) {
        attr = [attr]
    }
    if (!Array.isArray(inner)) {
        inner = [inner]
    }
    var eles = []
    for (t = 0; t < tag.length; t++) {
        for (a = 0; a < attr.length; a++) {
            for (i = 0; i < inner.length; i++) {
                var ele = document.createElement(tag[t])

                if (typeof attr[a] == "object") {
                    //console.log(keys(attr))

                    var k = keys(attr[a])
                    var ki = 0
                    while (ki < k.length) {
                        ele.setAttribute(k[ki], attr[a][k[ki]])
                        ki = ki + 1
                    }
                }
                if (typeof inner[i] == "string") {
                    ele.innerHTML = inner[i]
                }
                eles.push(ele)
            }
        }

    }
    }
    return eles
}

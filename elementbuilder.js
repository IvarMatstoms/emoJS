function createEmojiElement(tag, attr, inner) {
    if(Array.isArray(tag) && typeof tag[0]=="object"){
        eles=[]
        for (t=0;t<tag.length;t++){
          //console.log(tag[t])
          var ele = document.createElement(tag[t][0])

          if (typeof tag[t][1] == "object") {
              //console.log(keys(attr))

              var k = keys(tag[t][1])
              var ki = 0
              while (ki < k.length) {
                  ele.setAttribute(k[ki], tag[t][1][k[ki]])
                  ki = ki + 1
              }
          }
          if (typeof tag[t][2] == "string") {
              ele.innerHTML = tag[t][2]
          }
          eles.push(ele)
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
    //console.log(getEmojiElement(ele))

    return getEmojiElement(eles)
}

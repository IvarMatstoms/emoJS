function getEmojiElement(id) {
    return function(emoji) {

        function getDOM(ele) {
            if (typeof ele == "undefined") {
                return elements
            }
            if (typeof ele == "function") {
                //console.log(ele)
                //console.log(ele("📁"))
                //console.log(ele("getDOM"))
                return ele("getDOM")
            } else if (typeof ele == "object") {
                return [ele]
            }
        }
        //var eleemnts=null
        if (Array.isArray(id)) {
            var elements = id
        } else if (typeof id == "object") {
            var elements = [id]
        } else {
            var elements = document.querySelectorAll(id)
        }
        //console.log(elements)
        var hex = emoji.hexEncode()
            //📛
        if (hex == "d83ddcdb" || emoji == "id") {
            return function(id) {
                getDOM()[0].id = id
                return getEmojiElement(elements)
            }
        }
        //🤰
        if (hex == "d83edd30" || emoji == "append") {
            return function(element) {
                //console.log(getDOM(element))
                var i = 0
                var elelist = getDOM(element)
                mainele = getDOM()[0]
                while (i < elelist.length) {
                    mainele.appendChild(elelist[i])
                    i = i + 1;
                }
                return getEmojiElement(elements)
            }
        } else if (hex == "d83ddcc1" || emoji == "getDOM") {
            //console.log(getDOM())
            return getDOM()
        } else if (hex == "270f" || emoji == "attr") {
            return function(attr, value) {
                    if (typeof attr == "object") {
                        var k = keys(attr)
                        var ki = 0
                        while (ki < k.length) {
                            var ei = 0
                            while (ei < elements.length) {
                                elements[ei].setAttribute(k[ki], attr[k[ki]])
                                ei = ei + 1
                            }
                            ki = ki + 1
                        }

                    } else {
                        var i = 0;
                        while (i < elements.length) {
                            elements[i].setAttribute(attr, value)
                            i += 1
                        }
                    }
                    return getEmojiElement(elements)
                }
                //📃
        } else if (hex == "d83ddcc3" || emoji == "text") {
            return function(value) {
                    var i = 0;
                    while (i < elements.length) {
                        elements[i].innerHTML = value
                        i += 1
                    }
                    return getEmojiElement(elements)
                }
                //🔪
        } else if (hex == "d83ddd2a" || emoji == "remove") {
            return function(emoji2) {
                var hex2 = emoji2.hexEncode()
                if (hex2 == "d83ddc66" || hex2 == "d83ddc67" || emoji2 == "children") {
                    var parents = getDOM();
                    var pi = 0
                    while (pi < parents.length) {
                        var parent = parents[pi]
                        while (parent.firstChild) {
                            parent.removeChild(parent.firstChild);
                        }
                        pi = pi + 1
                    }
                }
            }
        }
        //return this


        //return elements
    }
}

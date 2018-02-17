export const render = (parent, childId, child) => {
    var container = document.createElement("div");
    container.setAttribute("id", childId)
    container.appendChild(child)
    parent.appendChild(container)
}

export const update = (elementId, element) => {
    var item = document.getElementById(elementId)
    item.replaceChild(element, item.childNodes[0])
}

export const guid = ()=> {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
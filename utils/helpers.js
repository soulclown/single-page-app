export const render = (parent, childId, child) => {
    var container = document.createElement("div");
    container.setAttribute("id", childId)
    container.appendChild(child)
    parent.appendChild(container)
}

export const update = (elementId, element) => {
    var item = document.getElementById(elementId).childNodes[0]
    item.replaceChild(element, item.childNodes[0])
}
export const Label = (id, text) => {
    var span = document.createElement('span')
    span.setAttribute('id', id);
    span.appendChild(document.createTextNode(text))
    return span
}

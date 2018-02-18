export const Button = (label, callback, labelId) => {
    var b = document.createElement("button")
    var labelSpan = document.createElement('span')
    labelSpan.setAttribute('id',labelId)
    labelSpan.innerText = label;
    b.appendChild(labelSpan)
    b.onclick = callback
    return b
}
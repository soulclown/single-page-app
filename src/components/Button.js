export const Button = (label, callback) => {
    var b = document.createElement("button")
    b.innerText = label
    b.value=label;
    b.onclick = callback
    return b
}
import {Label} from './Label.js'
export const Button = (label, callback, labelId) => {
    var b = document.createElement("button")
    b.appendChild(Label(labelId, label))
    b.onclick = callback
    return b
}
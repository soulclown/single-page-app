import {styles} from './ButtonsGroup.css'
import {Image} from '../Image.js'

export const ButtonsGroup = (id, items, selected, callback) => {
    var table = document.createElement('table')
    table.setAttribute('id', id)
    table.setAttribute('class', 'buttons-group-container')
    var row = document.createElement('tr')
    table.appendChild(row)
    items.forEach(function (item, index) {
        const handleClick = function () {
            const buttonsGroup = document.getElementById(id)
            const oldSelection = buttonsGroup.getElementsByClassName("selected")[0]
            const newSelection = buttonsGroup.getElementsByClassName("button-group-item")[index]
            // remove class "selected" for old element selected
            oldSelection.classList.remove("selected");
            // add class "selected" for the new selected element
            newSelection.classList.add("selected")
            callback (item.value)
        }
        const isSelected = item.value == selected
        row.appendChild(ButtonGroupItem(item, isSelected, handleClick))
    })
    return table
}

const ButtonGroupItem = (obj, selected, callback) => {
    var item = document.createElement('td')
    item.setAttribute('class', selected? 'button-group-item selected' : 'button-group-item')
    item.onclick=callback
    if (obj.imgSrc)
        item.appendChild(Image(obj.imgSrc))
    else
        item.appendChild(document.createTextNode(obj.value))
    return item
}
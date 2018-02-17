import styles from './Select.css'

export const Select = (options, optionSelected, callback) => {
    var node = document.createElement("select");
    options.forEach(function (option) {
        var isSelected = option == optionSelected
        var child = document.createElement("option");
        child.setAttribute('value', option)
        if (isSelected)
            child.setAttribute('selected', true)
        child.innerHTML = option
        node.appendChild(child)
    })
    node.onchange = callback
    return node;
}
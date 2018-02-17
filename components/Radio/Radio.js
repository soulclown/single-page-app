import styles from './Radio.css'
export const Radio = (groupName, options, optionSelected, callback) => {
    var node = document.createElement("div");
    options.forEach(function (option) {
        var isSelected = option == optionSelected
        var radioOption = document.createElement("input");
        radioOption.setAttribute('type', "radio")
        radioOption.setAttribute('name', groupName)
        radioOption.setAttribute('value', option)
        if (isSelected)
            radioOption.setAttribute('checked', true)
        var label = document.createElement("label")
        label.appendChild(document.createTextNode(option))
        node.appendChild(radioOption)
        node.appendChild(label)
    })
    node.addEventListener('change', function(e) {
        callback(e.target.value);
    }, false);
    return node;
}
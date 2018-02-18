import styles from './Slider.css'

export const Slider = (range, value, callback) => {
    var node = document.createElement("input");
    node.setAttribute('type', 'range')
    node.setAttribute('min', range[0])
    node.setAttribute('max', range[1])
    node.setAttribute('value', value)
    node.setAttribute('class', 'slider')
    node.oninput = function (e) {
        callback(e.target.value)
    }
    return node;
}
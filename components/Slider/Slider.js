import styles from './Slider.css'

export const Slider = (range, callback) => {
    var node = document.createElement("input");
    node.setAttribute('type', 'range')
    node.setAttribute('min', range[0])
    node.setAttribute('max', range[1])
    node.setAttribute('value', '100')
    node.setAttribute('class', 'slider')
    node.oninput = callback
    return node;
}
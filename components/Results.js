import {rateCalculator} from '../utils/rate-algorithm'
export const Results = (state) => {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(JSON.stringify(state)))
    node.appendChild(document.createElement("hr"))

    node.appendChild(document.createTextNode(rateCalculator(state)))
    return node;
}
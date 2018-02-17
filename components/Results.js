export const Results = (state) => {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(JSON.stringify(state)))
    return node;
}
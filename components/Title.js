export const Title = function (appName) {
    var node = document.createElement("h1");
    node.appendChild(document.createTextNode(appName))
    return node;
}
export const Title = (appName) => {
    var node = document.createElement("h1");
    node.appendChild(document.createTextNode(appName))
    return node;
}
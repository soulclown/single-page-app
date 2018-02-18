export const Image = (src) => {
    var image = document.createElement("img");
    image.setAttribute('src', src)
    return image
}
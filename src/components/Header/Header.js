import {styles} from './Header.css'
import {Image} from '../Image.js'
export const Header = (appName) => {
    var header = document.createElement("div");
    header.setAttribute('class', 'header')

    var title= document.createElement("div");
    title.setAttribute('class', 'app-title')
    title.appendChild(document.createTextNode(appName))

    header.appendChild(title)
    return header;
}
import {styles} from './Header.css'
import {MultilanguageSelector} from '../MultilanguageSelector/MultilanguageSelector.js'
export const Header = (appName) => {
    var header = document.createElement("div");
    header.setAttribute('class', 'header')

    var title= document.createElement("div");
    title.setAttribute('class', 'app-title')
    title.appendChild(document.createTextNode(appName))

    let multilanguage = MultilanguageSelector();
    multilanguage.setAttribute('class', 'ml')
    header.appendChild(title)
    header.appendChild(multilanguage)
    return header;
}
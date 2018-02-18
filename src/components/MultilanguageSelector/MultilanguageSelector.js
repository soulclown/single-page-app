import {styles} from './MultilanguageSelector.css'
import {Image} from '../Image.js'
import {IT, DE, EN, applyLanguage} from "../../utils/multilanguage";

export const MultilanguageSelector = () => {
    var container = document.createElement("div");

    container.appendChild(Flag(EN))
    container.appendChild(Flag(IT))
    container.appendChild(Flag(DE))
    return container;
}

const Flag = (lang) => {
    var flagContainer = document.createElement('div')
    flagContainer.setAttribute('class', 'flag-container')
    flagContainer.onclick = ()=> applyLanguage(lang);
    switch (lang) {
        case EN:
            flagContainer.appendChild(Image('public/images/flag_EN.png'))
            break;
        case DE:
            flagContainer.appendChild(Image('public/images/flag_DE.png'))
            break;
        case IT:
            flagContainer.appendChild(Image('public/images/flag_IT.png'))
            break;
    }
    return flagContainer
}
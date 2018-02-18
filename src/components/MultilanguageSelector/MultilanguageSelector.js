import {styles} from './MultilanguageSelector.css'
import {Image} from '../Image.js'
import {IT, DE, EN, applyLanguage} from "../../utils/multilanguage";

export const MultilanguageSelector = (handleChangeLanguage) => {
    var container = document.createElement("div");

    container.appendChild(Flag(EN,handleChangeLanguage))
    container.appendChild(Flag(IT, handleChangeLanguage))
    container.appendChild(Flag(DE, handleChangeLanguage))
    return container;
}

const Flag = (lang, handleChangeLanguage) => {
    var flagContainer = document.createElement('div')
    flagContainer.setAttribute('class', 'flag-container')
    flagContainer.onclick = ()=> handleChangeLanguage(lang);
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
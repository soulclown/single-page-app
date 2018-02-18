import styles from './Character.css'
import {bodyShapes, beardStyles, eyeColors, hairLengths} from '../../configs/constants.js'
import {Image} from '../Image.js'

export const Character = (props) => {
    var container = document.createElement("div");
    container.setAttribute('class', 'character-container')
    container.appendChild(Image('public/images/BODY_NORMAL.png'))
    switch(props.body) {
        case bodyShapes.NORMAL:
            container.a
            break;
        case bodyShapes.CHUBBY:
            container.appendChild(Image('public/images/BODY_FAT.png'))
            break;
        case bodyShapes.MUSCLE:
            container.appendChild(Image('public/images/BODY_MUSCLE.png'))
            break;
    }
    container.appendChild(Image('public/images/FACE.png'))
    switch(props.beard) {
        case beardStyles.SMALL:
            container.appendChild(Image('public/images/BEARD_SMALL.png'))
            break;
        case beardStyles.MIDDLE:
            container.appendChild(Image('public/images/BEARD_MIDDLE.png'))
            break;
        case beardStyles.LARGE:
            container.appendChild(Image('public/images/BEARD_LARGE.png'))
            break;
    }
    switch(props.eyeColor) {
        case eyeColors.BLUE:
            container.appendChild(Image('public/images/EYE_BLUE.png'))
            break;
        case eyeColors.GREEN:
            container.appendChild(Image('public/images/EYE_GREEN.png'))
            break;
        case eyeColors.GREY:
            container.appendChild(Image('public/images/EYE_GREY.png'))
            break;
    }
    switch(props.hairLength) {
        case hairLengths.SHORT:
            container.appendChild(Image('public/images/HAIR_SHORT.png'))
            break;
        case hairLengths.MIDDLE:
            container.appendChild(Image('public/images/HAIR_MIDDLE.png'))
            break;
        case hairLengths.LONG:
            container.appendChild(Image('public/images/HAIR_LONG.png'))
            break;
    }
    return container;
}
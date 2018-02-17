import styles from './Character.css'
import {bodyShapes, beardStyles} from '../../utils/constants.js'

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
    return container;
}

const Image = (src) => {
    var image = document.createElement("img");
    image.setAttribute('src', src)
    return image
}
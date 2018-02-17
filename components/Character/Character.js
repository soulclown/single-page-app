import styles from './Character.css'
import {bodyShapes} from '../../utils/constants.js'

export const Character = (body) => {
    var container = document.createElement("div");
    container.setAttribute('class', 'character-container')
    container.appendChild(Image('public/images/BODY_NORMAL.png'))
    switch(body) {
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
    return container;
}

const Image = (src) => {
    var image = document.createElement("img");
    image.setAttribute('src', src)
    return image
}
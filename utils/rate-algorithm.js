import * as constants from './constants.js'

export const rateCalculator = (props) => {
    return bodyShapeRate(props.body)
}

const bodyShapeRate = (bodyShape) => {
    switch(bodyShape) {
        case constants.bodyShapes.NORMAL:
            return 0.6
        case constants.bodyShapes.MUSCLE:
            return 0.4
        case constants.bodyShapes.CHUBBY:
            return 0.8
    }
}
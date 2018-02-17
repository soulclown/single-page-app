import * as constants from './constants.js'

export const rateCalculator = ({body, beard, eyeColor, hairLength, age}) => {
    return ageRate(age)
        * bodyShapeRate(body)
        * beardStyleRate(beard)
        * eyeColorsRate(eyeColor)
        * hairLengthRate(hairLength)
}

const bodyShapeRate = (bodyShape) => {
    switch(bodyShape) {
        case constants.bodyShapes.NORMAL:   return 0.8
        case constants.bodyShapes.MUSCLE:   return 0.4
        case constants.bodyShapes.CHUBBY:   return 1
    }
}
const beardStyleRate = (beard) => {
    switch(beard) {
        case constants.beardStyles.NONE:    return 0.8
        case constants.beardStyles.SMALL:   return 1
        case constants.beardStyles.MIDDLE:  return 0.5
        case constants.beardStyles.LARGE:   return 0.7
    }
}
const eyeColorsRate = (color) => {
    switch (color) {
        case constants.eyeColors.GREY:      return 0.6
        case constants.eyeColors.BROWN:     return 0.8
        case constants.eyeColors.GREEN:     return 0.7
        case constants.eyeColors.BLUE:      return 1
    }
}
const hairLengthRate = (length) => {
    switch(length) {
        case constants.hairLengths.BALD:    return 0.8
        case constants.hairLengths.SHORT:   return 1
        case constants.hairLengths.MIDDLE:  return 0.7
        case constants.hairLengths.LONG:    return 0.4
    }
}
const ageRate = (age)=> {
    // Older is, more vote will get.
    return age / constants.ageRange[1]
}
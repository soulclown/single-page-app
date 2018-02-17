import * as constants from '../configs/constants.js'

export const rateCalculator = ({age, height, body, beard, eyeColor, hairLength }) => {
    let ratesArray = [
        ageRate(age),
        heightRate(height),
        bodyShapeRate(body),
        beardStyleRate(beard),
        eyeColorsRate(eyeColor),
        hairLengthRate(hairLength)
    ]
    let rate = ratesArray.reduce((a,b)=>a+b) / ratesArray.length
    if (boosterPavarotti({body, beard, eyeColor, hairLength }))     rate*=1.1   // +10%
    if (boosterSympathy({body, beard, hairLength }))                rate*=1.2   // +20%
    if (boosterMachoMan({body, hairLength, eyeColor, height }))     rate*=0.8   // -20%
    return rate>1?1:rate
}

const bodyShapeRate = (bodyShape) => {
    switch(bodyShape) {
        case constants.bodyShapes.NORMAL:   return 0.7
        case constants.bodyShapes.MUSCLE:   return 0.4
        case constants.bodyShapes.CHUBBY:   return 0.8
    }
}
const beardStyleRate = (beard) => {
    switch(beard) {
        case constants.beardStyles.NONE:    return 0.7
        case constants.beardStyles.SMALL:   return 0.8
        case constants.beardStyles.MIDDLE:  return 0.4
        case constants.beardStyles.LARGE:   return 0.6
    }
}
const eyeColorsRate = (color) => {
    switch (color) {
        case constants.eyeColors.GREY:      return 0.6
        case constants.eyeColors.BROWN:     return 0.7
        case constants.eyeColors.GREEN:     return 0.5
        case constants.eyeColors.BLUE:      return 1
    }
}
const hairLengthRate = (length) => {
    switch(length) {
        case constants.hairLengths.BALD:    return 0.8
        case constants.hairLengths.SHORT:   return 0.8
        case constants.hairLengths.MIDDLE:  return 0.7
        case constants.hairLengths.LONG:    return 0.4
    }
}
const ageRate = (age)=> {
    // Older is, more vote will get.
    return age / constants.ageRange[1]
}
const heightRate = (height)=> {
    // Shorter is, more vote will get.
    return 1 - (height / constants.heightRange[1])
}

const boosterPavarotti = ({body, beard, eyeColor, hairLength }) => {
    // Short Hair, long beard, brown eyes and he dress a smoking
    return (hairLength==constants.hairLengths.SHORT
        && beard==constants.beardStyles.LARGE
        && eyeColor==constants.eyeColors.BROWN
        && body == constants.bodyShapes.NORMAL
    )
}

const boosterSympathy = ({body, beard, hairLength }) => {
    // Long hair, long beard and sweet belly
    return (hairLength==constants.hairLengths.LONG
        && beard==constants.beardStyles.LARGE
        && body == constants.bodyShapes.CHUBBY
    )
}

const boosterMachoMan = ({body, hairLength, eyeColor, height }) => {
    // Muscles, long hair, Higher than 180cm, Muscle and blue Eye
    return (height>180
        && hairLength==constants.hairLengths.LONG
        && eyeColor==constants.eyeColors.BLUE
        && body == constants.bodyShapes.MUSCLE
    )
}

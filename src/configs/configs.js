import * as constants from './constants.js'
export const configs = {
    ids: function () {
        return {
            header: "__HEADER",
            content: "__CONTENT",
            title : "__TITLE",
            results : "__RESULTS",
            sliderAge: "__SLIDER_AGE",
            sliderHeight: "__SLIDER_HEIGHT",
            selectHairColor: "__SELECT_HAIR_COLOR",
            radioHairLength: "__RADIO_HAIR_LENGTH",
            radioEyeColor: "__RADIO_EYE_COLOR",
            radioBeard: "__RADIO_BEARD",
            radioBody: "__RADIO_BODY",
            character: "__CHARACTER"
        }
    }
}
export const initialState = new Object({
    age:82,
    height: 165,
    hairColor: constants.hairColors.BLOND,
    hairLength: constants.hairLengths.SHORT,
    eyeColor:constants.eyeColors.BROWN,
    beard: constants.beardStyles.NONE,
    body: constants.bodyShapes.NORMAL
})
import style from './main.css'
import * as constants from './src/utils/constants.js'
import {Title} from './src/components/Title.js'
import {Results} from "./src/components/Results.js";
import {render, update} from './src/utils/helpers.js'
import {configs} from './src/utils/configs.js'

import {Button} from "./src/components/Button.js"
import {Slider} from './src/components/Slider/Slider.js'
import {Select} from './src/components/Select/Select.js'
import {Radio} from './src/components/Radio/Radio.js'
import {Character} from './src/components/Character/Character.js'

var app = {
    appName : 'Welcome to Camel Calculator',
    state : new Object({
        age:82,
        height: 165,
        hairColor: constants.hairColors.BLOND,
        hairLength: constants.hairLengths.SHORT,
        eyeColor:constants.eyeColors.BROWN,
        beard: constants.beardStyles.NONE,
        body: constants.bodyShapes.NORMAL
    }),
    getState: function () {
        return this.state
    },
    setAge: function (age) {
        this.state.age = age
    },
    setHeight: function (cm) {
        this.state.height = cm
    },
    setHairColor: function (color) {
        this.state.hairColor = color
    },
    setHairLength: function (length) {
        this.state.hairLength = length
    },
    setEyeColor: function (color) {
        this.state.eyeColor = color
    },
    setBeard: function (beardStyle) {
        this.state.beard = beardStyle
    },
    setBody: function (bodyShape) {
        this.state.body = bodyShape
    }
}

var appContainer = document.getElementById("app-container")

render(appContainer, configs.ids().title, Title(app.appName))
render(appContainer, configs.ids().results, Results(app.getState()))

const handleSlideAge = function (e) {
    app.setAge(e.target.value)
    update(configs.ids().results,Results(app.getState()))
}
const handleSlideHeight = function (e) {
    app.setHeight(e.target.value)
    update(configs.ids().results,Results(app.getState()))
}
const handleSelectHairColor = function (e) {
    app.setHairColor(e.target.value)
    update(configs.ids().results,Results(app.getState()))
}
const handleSelectHairLength = function (length) {
    app.setHairLength(length)
    update(configs.ids().results,Results(app.getState()))
    update(configs.ids().character,Character(app.getState()))
}
const handleSelectEyeColor = function (color) {
    app.setEyeColor(color)
    update(configs.ids().results,Results(app.getState()))
    update(configs.ids().character,Character(app.getState()))
}
const handleSelectBeard = function (style) {
    app.setBeard(style)
    update(configs.ids().results,Results(app.getState()))
    update(configs.ids().character,Character(app.getState()))
}
const handleSelectBody = function (shape) {
    app.setBody(shape)
    update(configs.ids().results,Results(app.getState()))
    update(configs.ids().character,Character(app.getState()))
}

render(appContainer, configs.ids().sliderAge,
    Slider( constants.ageRange, app.getState().age, handleSlideAge )
)
render(appContainer, configs.ids().sliderHeight,
    Slider( constants.heightRange, app.getState().height,  handleSlideHeight )
)
render(appContainer, configs.ids().selectHairColor,
    Select( Object.keys(constants.hairColors), app.getState().hairColor, handleSelectHairColor )
)
render(appContainer, configs.ids().radioHairLength,
    Radio( Object.keys(constants.hairLengths), app.getState().hairLength, handleSelectHairLength )
)
render(appContainer, configs.ids().radioEyeColor,
    Radio( Object.keys(constants.eyeColors), app.getState().eyeColor, handleSelectEyeColor )
)
render(appContainer, configs.ids().radioBeard,
    Radio( Object.keys(constants.beardStyles), app.getState().beard, handleSelectBeard )
)
render(appContainer, configs.ids().radioBody,
    Radio( Object.keys(constants.bodyShapes), app.getState().body, handleSelectBody )
)


render(appContainer, configs.ids().character, Character( app.getState()))
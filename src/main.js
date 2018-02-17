import style from '../public/css/main.css'
import * as constants from './configs/constants.js'
import {Title} from './components/Title.js'
import {Results} from "./components/Results.js";
import {render, update} from './utils/helpers.js'
import {configs, initialState} from './configs/configs.js'

import {Button} from "./components/Button.js"
import {Slider} from './components/Slider/Slider.js'
import {Select} from './components/Select/Select.js'
import {Radio} from './components/Radio/Radio.js'
import {Character} from './components/Character/Character.js'

var app = {
    appName : 'Welcome to Camel Calculator',
    state : initialState,
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
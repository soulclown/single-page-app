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
import {FormRow} from './components/FormRow/FormRow.js'

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

const AgeSlider     = Slider( constants.ageRange, app.getState().age, handleSlideAge )
const HeightSlider  = Slider( constants.heightRange, app.getState().height,  handleSlideHeight )
const HairColorSel  = Select( Object.keys(constants.hairColors), app.getState().hairColor, handleSelectHairColor )
const HairRadio     = Radio( Object.keys(constants.hairLengths), app.getState().hairLength, handleSelectHairLength )
const EyeColorRadio = Radio( Object.keys(constants.eyeColors), app.getState().eyeColor, handleSelectEyeColor )
const BeardRadio    = Radio( Object.keys(constants.beardStyles), app.getState().beard, handleSelectBeard )
const BodyRadio     = Radio( Object.keys(constants.bodyShapes), app.getState().body, handleSelectBody )

render(appContainer, configs.ids().sliderAge,
    FormRow( "Age", AgeSlider )
)
render(appContainer, configs.ids().sliderHeight,
    FormRow( "Height (cm)", HeightSlider )
)
render(appContainer, configs.ids().selectHairColor,
    FormRow( "Haircolor", HairColorSel )
)
render(appContainer, configs.ids().radioHairLength,
    FormRow( "Hairlength", HairRadio )
)
render(appContainer, configs.ids().radioEyeColor,
    FormRow( "Eyecolor", EyeColorRadio )
)
render(appContainer, configs.ids().radioBeard,
    FormRow( "Beard", BeardRadio )
)
render(appContainer, configs.ids().radioBody,
    FormRow( "Body", BodyRadio )
)


render(appContainer, configs.ids().character, Character( app.getState()))
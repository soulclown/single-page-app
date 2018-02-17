import style from './main.css'
import * as constants from './utils/constants.js'
import {Title} from './components/Title.js'
import {Results} from "./components/Results.js";
import {render, update} from './utils/helpers.js'
import {configs} from './utils/configs.js'

import {Button} from "./components/Button.js"
import {Slider} from './components/Slider/Slider.js'
import {Select} from './components/Select/Select.js'

var app = {
    appName : 'Welcome to Camel Calculator',
    state : new Object({
        age:22,
        height: 176,
        eyeColor:constants.eyeColors.BLUE,
        hairColor: constants.hairColors.BLOND,
        hairLength: constants.hairLengths.MIDDLE,
        beard: constants.beardStyle.NONE,
        body: constants.bodyShape.NORMAL
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
    setEyeColor: function (eyeColor) {
        this.state.eyeColor = eyeColor
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
    app.setEyeColor(e.target.value)
    update(configs.ids().results,Results(app.getState()))
}

render(appContainer, configs.ids().sliderAge,
    Slider( constants.ageRange, app.getState().age, handleSlideAge )
)
render(appContainer, configs.ids().sliderHeight,
    Slider( constants.heightRange, app.getState().height,  handleSlideHeight )
)
render(appContainer, configs.ids().sliderHeight,
    Select( Object.keys(constants.eyeColors), app.getState().eyeColor, handleSelectHairColor )
)
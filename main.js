import style from './main.css'
import * as constants from './utils/constants.js'
import {Title} from './components/Title.js'
import {Results} from "./components/Results.js";
import {render, update} from './utils/helpers.js'
import {configs} from './utils/configs.js'

import {Button} from "./components/Button.js"

var app = {
    appName : 'Welcome to Camel Calculator',
    state : new Object({
        age:undefined,
        height: undefined,
        hairColor: constants.hairColors.BLOND,
        hairLength: constants.hairLengths.MIDDLE,
        eyeColor:constants.eyeColors.BLUE,
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
    }
}
var appContainer = document.getElementById("app-container")

render(appContainer, configs.ids().title, Title(app.appName))
render(appContainer, configs.ids().results, Results(app.getState()))


/* Test DOM update on user interaction */
const handleOnClick = function () {
    app.setAge(Math.floor(Math.random() * 10))
    update(
        configs.ids().results,
        Results(app.getState())
    )
}
appContainer.appendChild(Button("Random Age", handleOnClick))
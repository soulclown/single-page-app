import style from './main.css'
import * as constants from './utils/constants.js'
import {Title} from './components/Title.js'
import {Results} from "./components/Results.js";

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
        console.log("new AGE:"+ age)
    },
    setHeight: function (cm) {
        this.state.height = cm
        console.log("new Height:"+ cm)
    }
}
var appContainer = document.getElementById("app-container")

appContainer.appendChild(Title(app.appName))
appContainer.appendChild(Results(app.getState()))

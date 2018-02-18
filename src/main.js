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
import {Header} from './components/Header/Header.js'
import {CountUpTimer} from './components/CountUpTimer/CountUpTimer.js'
import {rateCalculator} from './utils/rate-algorithm'

var app = {
    appName : 'How many votes will Berlusconi get?',
    state : initialState,
    getState: function () {
        return this.state
    },
    setState: function (newState) {
        this.state = Object.assign({}, this.state, newState)
        update(configs.ids().results,Results(this.state))
        update(configs.ids().character,Character(this.state))
        document.getElementById(configs.ids().sliderAge).querySelector("#value").innerText = this.state.age
        document.getElementById(configs.ids().sliderHeight).querySelector("#value").innerText = this.state.height
        CountUpTimer.animate(rateCalculator(this.getState()))
    },
    showResults: function() {
        var countUpTimer = document.getElementById("TEST")
        if (!countUpTimer)  render(appContainer, "TEST", CountUpTimer(0))
        CountUpTimer.animate(rateCalculator(this.getState()))
    }
}

var appContainer = document.getElementById("app-container")


const AgeSlider     = Slider( constants.ageRange, app.getState().age, function (e) { app.setState({age:e}) } )
const HeightSlider  = Slider( constants.heightRange, app.getState().height,  function (e) { app.setState({height:e})} )
const HairColorSel  = Select( Object.keys(constants.hairColors), app.getState().hairColor, function (e) { app.setState({hairColor:e}) } )
const HairRadio     = Radio( Object.keys(constants.hairLengths), app.getState().hairLength, function (length) { app.setState({hairLength:length}) } )
const EyeColorRadio = Radio( Object.keys(constants.eyeColors), app.getState().eyeColor, function (color) { app.setState({eyeColor:color}) } )
const BeardRadio    = Radio( Object.keys(constants.beardStyles), app.getState().beard, function (style) { app.setState({beard:style}) } )
const BodyRadio     = Radio( Object.keys(constants.bodyShapes), app.getState().body, function (shape) { app.setState({body:shape}) } )

const formRows = [
    {id: configs.ids().sliderAge,       title:"Age",            controller:AgeSlider,      showValue:app.getState().age},
    {id: configs.ids().sliderHeight,    title:"Height (cm)",    controller:HeightSlider,   showValue:app.getState().height},
    {id: configs.ids().selectHairColor, title:"Haircolor",      controller:HairColorSel},
    {id: configs.ids().radioHairLength, title:"Hairlength",     controller:HairRadio},
    {id: configs.ids().radioEyeColor,   title:"Eyecolor",       controller:EyeColorRadio},
    {id: configs.ids().radioBeard,      title:"Beard",          controller:BeardRadio},
    {id: configs.ids().radioBody,       title:"Body",           controller:BodyRadio},
]




render(appContainer, configs.ids().title, Header(app.appName))

var content = document.createElement('div')
content.setAttribute('class', 'row')
var colPreview = document.createElement('div')
colPreview.setAttribute('class', 'col col-lg-30')
var colForm = document.createElement('div')
colForm.setAttribute('class', 'col col-lg-70 col-form')

content.appendChild(colPreview)
content.appendChild(colForm)


render(appContainer, "__CONTENT", content)
formRows.forEach(row=>render(colForm, row.id, FormRow(row.title, row.controller, row.showValue)))
render(colForm, "SUBMIT BUTTON", Button("Submit", ()=>{app.showResults()}))
render(colPreview, configs.ids().character, Character( app.getState()))
render(appContainer, configs.ids().results, Results(app.getState()))
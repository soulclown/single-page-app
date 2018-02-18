import style from '../public/css/main.css'
import * as constants from './configs/constants.js'
import {Results} from "./components/Results/Results.js";
import {render, update} from './utils/helpers.js'
import {configs, initialState} from './configs/configs.js'

import {Button} from "./components/Button.js"
import {Slider} from './components/Slider/Slider.js'
import {Select} from './components/Select/Select.js'
import {Radio} from './components/Radio/Radio.js'
import {Character} from './components/Character/Character.js'
import {FormRow} from './components/FormRow/FormRow.js'
import {Header} from './components/Header/Header.js'
import {EN, IT, DE, applyLanguage, getDictionary} from './utils/multilanguage.js'
import {MultilanguageSelector} from './components/MultilanguageSelector/MultilanguageSelector.js'

const dictionary = getDictionary(EN)
var app = {
    appName : dictionary.L_appName,
    language: EN,
    getLanguage: function() {return this.language},
    state : initialState,
    getState: function () {
        return this.state
    },
    setState: function (newState) {
        this.state = Object.assign({}, this.state, newState)
        document.getElementById(configs.ids().sliderAge).querySelector("#value").innerText = this.state.age
        document.getElementById(configs.ids().sliderHeight).querySelector("#value").innerText = this.state.height
        if (document.getElementById(configs.ids().results))
            update(configs.ids().results,Results(this.state))
        if (document.getElementById(configs.ids().character))
            update(configs.ids().character,Character(this.state))
    },
    showResults: function() {
        update(configs.ids().content,Results(app.getState()))
        Results.animate(this.getState())
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
    {
        id: configs.ids().sliderAge,
        labelId: "L_form_age",
        controller:AgeSlider,
        showValue:app.getState().age},
    {
        id: configs.ids().sliderHeight,
        labelId: "L_form_height",
        controller:HeightSlider,
        showValue:app.getState().height},
    {
        id: configs.ids().selectHairColor,
        labelId: "L_form_haircolor",
        controller:HairColorSel
    },
    {
        id: configs.ids().radioHairLength,
        labelId: "L_form_hairlength",
        controller:HairRadio
    },
    {
        id: configs.ids().radioEyeColor,
        labelId: "L_form_eyeColor",
        controller:EyeColorRadio
    },
    {
        id: configs.ids().radioBeard,
        labelId: "L_form_beard",
        controller:BeardRadio
    },
    {
        id: configs.ids().radioBody,
        labelId: "L_form_body",
        controller:BodyRadio
    },
]




render(appContainer, configs.ids().header, Header(app.appName))

var content = document.createElement('div')
content.setAttribute('class', 'app-content')

render(appContainer, configs.ids().content, content)
formRows.forEach(row=>render(content, row.id, FormRow(app.getLanguage(), row.labelId, row.controller, row.showValue)))
render(content, "__SUBMIT", Button("Submit", ()=>{app.showResults()}, "L_form_submit"))

applyLanguage(app.getLanguage())
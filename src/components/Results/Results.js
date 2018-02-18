import {styles} from './Results.css'
import {rateCalculator} from '../../utils/rate-algorithm'
import {CountUpTimer} from "../CountUpTimer/CountUpTimer";
import {Character} from '../Character/Character.js'
import {Label} from '../Label.js'
import {getDictionary} from "../../utils/multilanguage";
import {Button} from '../Button.js'

const Results = (state, lang) => {
    var labels = getDictionary(lang)
    console.log(labels)
    var container = document.createElement('div')
    var characterBox = document.createElement('div')
    characterBox.setAttribute('class', 'character-box effect8')
    characterBox.appendChild(Character( state) )
    container.appendChild(characterBox)
    container.setAttribute('class', 'results')
    container.appendChild(Label('L_results_prefix',labels['L_results_prefix']))
    container.appendChild(CountUpTimer(rateCalculator(state)))
    container.appendChild(Label('L_results_suffix',labels['L_results_suffix'] ))
    container.appendChild(Button(labels['L_results_tryagain'], ()=>{location.reload()}, "L_results_tryagain"))
    return container
}
Results.animate = (state) => {
    CountUpTimer.animate(rateCalculator(state))
}

export {Results}
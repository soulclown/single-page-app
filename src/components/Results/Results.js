import {styles} from './Results.css'
import {rateCalculator} from '../../utils/rate-algorithm'
import {CountUpTimer} from "../CountUpTimer/CountUpTimer";
import {Character} from '../Character/Character.js'

const Results = (state) => {
    var container = document.createElement('div')
    var characterBox = document.createElement('div')
    characterBox.setAttribute('class', 'character-box effect8')
    characterBox.appendChild(Character( state) )
    container.appendChild(characterBox)
    container.setAttribute('class', 'results')
    var prefix = document.createElement('span')
    prefix.setAttribute('id', 'L_results_prefix')
    prefix.appendChild(document.createTextNode("Dressed like this he will get the"))
    var suffix = document.createElement('span')
    suffix.setAttribute('id', 'L_results_suffix')
    suffix.appendChild(document.createTextNode("of votes."))

    container.appendChild(prefix)
    container.appendChild(CountUpTimer(rateCalculator(state)))
    container.appendChild(suffix)
    return container
}
Results.animate = (state) => {
    CountUpTimer.animate(rateCalculator(state))
}

export {Results}
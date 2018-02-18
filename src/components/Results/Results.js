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
    container.appendChild(document.createTextNode("Dressed like this he will get the"))
    container.appendChild(CountUpTimer(rateCalculator(state)))
    container.appendChild(document.createTextNode("of votes."))
    return container
}
Results.animate = (state) => {
    CountUpTimer.animate(rateCalculator(state))
}

export {Results}
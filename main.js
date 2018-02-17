import style from './main.css'
import {Title} from './components/Title.js'

const appName = 'Welcome to Camel Calculator'

var appContainer = document.getElementById("app-container")

appContainer.appendChild(Title(appName))

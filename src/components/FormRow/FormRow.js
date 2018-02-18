import {styles} from './FormRow.css'
import {getDictionary} from "../../utils/multilanguage";
import {Label} from '../Label.js'
export const FormRow = (lang, labelId, element, showValue) => {
    let labels = getDictionary(lang)
    // First column: Title
    var col_1= document.createElement("div")
    col_1.setAttribute('class', 'col col-lg-30')
    var col_1_content = document.createElement('h3')
    col_1_content.appendChild(Label(labelId, labels[labelId]))
    col_1.appendChild(col_1_content)
    if (showValue!=undefined) {
        let value = document.createElement('div')
        value.setAttribute('id', 'value')
        value.appendChild(document.createTextNode(showValue))
        col_1_content.appendChild(value)
    }
    // Second Column: controller element
    var col_2= document.createElement("div")
    col_2.setAttribute('class', 'col col-lg-70')
    col_2.appendChild(element)
    // Row element
    var row = document.createElement("div");
    row.setAttribute('class', 'row')
    row.appendChild(col_1)
    row.appendChild(col_2)
    return row;
}
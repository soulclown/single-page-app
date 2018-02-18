import {styles} from './FormRow.css'
export const FormRow = (title, element) => {
    // First column: Title
    var col_1= document.createElement("div")
    col_1.setAttribute('class', 'col')
    var col_1_content = document.createElement('h3')
    col_1_content.appendChild(document.createTextNode(title))
    col_1.appendChild(col_1_content)
    // Second Column: controller element
    var col_2= document.createElement("div")
    col_2.setAttribute('class', 'col')
    col_2.appendChild(element)
    // Row element
    var row = document.createElement("div");
    row.setAttribute('class', 'row')
    row.appendChild(col_1)
    row.appendChild(col_2)
    return row;
}
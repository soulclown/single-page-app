const EN = "EN"
const IT = "IT"
const DE = "DE"
const EN_dictionary = {
    L_appName: "How many votes will Berlusconi get?",
    L_form_age: "Age",
    L_form_height: "Height",
    L_form_haircolor: "Haircolor",
    L_form_hairlength: "Hairlength",
    L_form_eyeColor: "Eyecolor",
    L_form_beard: "Beard",
    L_form_body: "Body",
    L_form_submit: "Calculate",
    L_results_prefix: "Dressed like this he will get the",
    L_results_suffix: "of votes.",
    L_results_tryagain: "CALCULATE AGAIN?"
}
const IT_dictionary = {
    L_appName: "Quanti voti prenderà Berlusconi questa volta?",
    L_form_age: "Età",
    L_form_height: "Altezza",
    L_form_haircolor: "Colore dei capelli",
    L_form_hairlength: "Lunghezza dei capelli",
    L_form_eyeColor: "Occhi",
    L_form_beard: "Barba",
    L_form_body: "Corpo",
    L_form_submit: "Calcola",
    L_results_prefix: "Conciato in questo modo prenderà il ",
    L_results_suffix: "dei voti.",
    L_results_tryagain: "VUOI RIPROVARE?"
}
const DE_dictionary = {
    L_appName: "Wie viele Stimmen kriegt Berlusconi?",
    L_form_age: "Alter",
    L_form_height: "Größe (cm)",
    L_form_haircolor: "Haarfarbe",
    L_form_hairlength: "Haarlänge",
    L_form_eyeColor: "Augenfarbe",
    L_form_beard: "Bart",
    L_form_body: "Oberkörper",
    L_form_submit: "Berechnen",
    L_results_prefix: "Wenn er so aussieht bekommt er  ",
    L_results_suffix: "der Stimmen.",
    L_results_tryagain: "NOCHMAL BERECHNEN?"
}
const dictionary = new Map()
dictionary.set(EN, EN_dictionary);
dictionary.set(IT, IT_dictionary);
dictionary.set(DE, DE_dictionary);

const getDictionary = (lang) => {
    return dictionary.get(lang)
}
const applyLanguage = (lang) => {
    let d = dictionary.get(lang);
    Object.keys(d).forEach(key=>{
        if (document.getElementById(key))
            document.getElementById(key).innerText = d[key]
    })
}

export {EN, IT, DE, applyLanguage, getDictionary}


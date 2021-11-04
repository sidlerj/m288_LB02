const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('Email')
const betreff = document.getElementById('Betreff')
const fileDownload = document.getElementById('fileDownload')
const textblock = document.getElementById('textblock')


let checkForm = function () {
    if (fullName === '' || fullName == null) {
        document.getElementById(errorMsg) = "Alle mit * markierten Felder müssen ausgefüllt sein.";
    }
    if (email === '' || email == null) {
        document.getElementById(errorMsg) = "Alle mit * markierten Felder müssen ausgefüllt sein.";
    }
    if (betreff === '' || betreff == null) {
        document.getElementById(errorMsg) = "Alle mit * markierten Felder müssen ausgefüllt sein.";
    }
    if (fileDownload === '' || fileDownload == null) {
        document.getElementById(errorMsg) = "Alle mit * markierten Felder müssen ausgefüllt sein.";
    }
    if (textblock === '' || textblock == null) {
        document.getElementById(errorMsg) = "Alle mit * markierten Felder müssen ausgefüllt sein.";
    }
}

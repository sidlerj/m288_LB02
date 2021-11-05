const fullName = document.getElementById('fullname');
const email = document.getElementById('Email');

let formFields = [fullName, email]


function errorMsg() {
    if (document.getElementById('fullname').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } if (document.getElementById('email').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } if (document.getElementById('betreff').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } if (document.getElementById('textblock').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } else {
        document.getElementById("errorTextMsg").innerHTML = "";
    }
}

function errorMsgEmail() {
    if (document.getElementById('email').value.indexOf('@') == -1) {
        document.getElementById("errorTextMsg").innerHTML = "Die E-Mail-Adresse muss ein @-Zeichen enthalten.";
    } else {
        document.getElementById("errorTextMsg").innerHTML = "";
        return window.document.forms[0].reset();
    }
}
const fullName = document.getElementById('fullname');
const email = document.getElementById('Email');

let formFields = [fullName, email]

function errorMsg() {
    if (document.getElementById('fullname').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } //if (document.getElementById('email').value == "") {
        //document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";}
if (document.getElementById('betreff').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } if (document.getElementById('textblock').value == "") {
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } else {
        document.getElementById("errorTextMsg").innerHTML = "";
    }
}

function errorMsgEmail() {
    if (document.getElementById('email').value == ""){
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    }
    else {
        if (document.getElementById('email').value.length < 3){
            document.getElementById("errorTextMsg").innerHTML = "Die E-Mail-Adresse ist zu kurz.";
        }
        else {
            if (document.getElementById('email').value.indexOf("@") == -1){
                document.getElementById("errorTextMsg").innerHTML = "Die E-Mail-Adresse muss ein @-Zeichen enthalten.";
            }
            else {
                if (document.getElementById('email').value.indexOf(".", document.getElementById('email').value.indexOf("@")) == -1){
                    document.getElementById("errorTextMsg").innerHTML = "Nach dem @-Zeichen muss ein Punkt folgen.";
                }
            }
        }
    }
}
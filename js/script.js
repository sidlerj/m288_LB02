const fullName = document.getElementById('fullname');
const email = document.getElementById('Email');

let formFields = [fullName, email]


function errorMsg(){
    if (document.getElementById('fullname').value == ""){
        document.getElementById("errorTextMsg").innerHTML = "Alle mit * markierte Felder müssen ausgefüllt werden!";
    } else {
        window.document.forms[0].reset();
    }
}
// read form element
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const betreff = document.getElementById('betreff');
const fileDownload = document.getElementById('fileDownload');
const textblock = document.getElementById('textblock');
const errorText = document.getElementById('errorTextMsg');
const absendenButton = document.getElementById('absenden');

let formFields = [fullName, email]


function showErrorMsg() {
    if(fullname.value === '') {
        errorText.innerHTML = 'Alle mit * markierte Felder müssen ausgefüllt werden!';
    }
    else if(email.value === '') {
        errorText.innerHTML = 'Alle mit * markierte Felder müssen ausgefüllt werden!';
    }
    else if(betreff.value === '') {
        errorText.innerHTML = 'Alle mit * markierte Felder müssen ausgefüllt werden!';
    }
    else if(textblock.value === '') {
        errorText.innerHTML = 'Alle mit * markierte Felder müssen ausgefüllt werden!';
    }
    else{
        errorText.innerHTML = 'Das Formular wurde erfolgreich abgeschickt.';
    }
}

// else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){
//         errorText.innerHTML = 'Geben Sie bitte eine richtige E-Mail-Adresse an';
//     }
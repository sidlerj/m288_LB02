// read form element
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const betreff = document.getElementById('betreff');
const fileDownload = document.getElementById('fileDownload');
const textblock = document.getElementById('textblock');
const errorText = document.getElementById('errorTextMsg');
const absendenButton = document.getElementById('absenden');

//let formFields = [fullName, email]

/**
 *
 * @type {string}
 */
//Json erstellt und in var eigefügt
let autofillData = '{"name":"Max Muster", "email":"max.muster@example.com", "betreff":"example betreff", "nachricht":"example nachricht"}';

/**
 *
 * @type {any}
 */
// Objekt autofill wird erstellt //nutzbar gemacht für js
const autofillClass = JSON.parse(autofillData);


// Füllt Formular aus (Hohlt values aus JSON Objekt)
function autofill() {
    document.getElementById('fullname').value = autofillClass.name;
    document.getElementById('email').value = autofillClass.email;
    document.getElementById('betreff').value = autofillClass.betreff;
    document.getElementById('textblock').value = autofillClass.nachricht;
}


//Validation von Formular
function showErrorMsg() {
    let contact;

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
        contact = {
            VollerName: fullname.value,
            Email: email.value
        }

        console.log(contact);
    }
}

// else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){
//         errorText.innerHTML = 'Geben Sie bitte eine richtige E-Mail-Adresse an';
//     }
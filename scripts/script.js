let email = document.querySelector('#email');
let number = document.querySelector('#number');
let subscribe = document.querySelector('#subscribe');

function ValidateEmail(inputText) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/im;
    if (mailformat.test(inputText)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function ValidatePhonenumber(number) {
    if (isNaN(number) || number.indexOf(" ") != -1) {
        alert("Enter numeric value")
        return false;
    } else if (number.length > 10) {
        alert("enter 10 character Phonenumber");
        return false;
    } else if (number.charAt(0) != "0") {
        alert("Phonenumber should start with 0 ");
        return false
    } else {
        return true;
    }
}


subscribe.addEventListener('click', () => {
    console.log(number.value);
    if (ValidateEmail(email.value) && ValidatePhonenumber(number.value)) {
        alert(`Thank you for subscribing we will send daily newsletters via ${email.value} and text messages via ${number.value} `)
    }
});
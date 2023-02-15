const inputName = document.getElementById("name-input");
const cardName = document.getElementById("name");

const inputNumber = document.getElementById("number-input");
const cardNumber = document.getElementById("number");

const inputCvc = document.getElementById("cvc-input");
const cardCvc = document.getElementById("cvc");

const inputMonth = document.getElementById("month-input");
const cardMonth = document.getElementById("month");

const inputYear = document.getElementById("year-input");
const cardYear = document.getElementById("year");

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const thank = document.getElementById("thank");

inputName.addEventListener('keyup', addName);
inputNumber.addEventListener('keyup', addNumber);
inputCvc.addEventListener('keyup', addCvc);
inputMonth.addEventListener('keyup', addMonth);
inputYear.addEventListener('keyup', addYear);

function addName() {
    cardName.innerHTML = inputName.value;
}

function addNumber() {
    cardNumber.innerHTML = inputNumber.value;
}

function addCvc() {
    cardCvc.innerHTML = inputCvc.value;
}

function addMonth() {
    cardMonth.innerHTML = inputMonth.value;
}

function addYear() {
    cardYear.innerHTML = inputYear.value;
}

form.addEventListener('submit', e => {
    

    checkInputs();

    if (isFormValid() == true) {
        form.submit();
        form.style.display = "none";
    } else {
        e.preventDefault();
    }
});

function checkInputs() {
    const nameValue = inputName.value;
    const numberValue = inputNumber.value;
    const monthValue = inputMonth.value;
    const yearValue = inputYear.value;
    const cvcValue = inputCvc.value;

    if(nameValue === "") {
        setError(inputName, "Can't be blank")
    } else if(!isLetter(nameValue)) {
        setError(inputName, "Please provide a correct name")
    } else {
        setSuccess(inputName);
    }

    if(numberValue === "") {
        setError(inputNumber,  "Can't be blank")
    } else if(!isNumber(numberValue)) {
        setError(inputNumber, "Wrong input")
    } else {
        setSuccess(inputNumber)
    }

    if(monthValue === "") {
        setError(inputMonth,  "Can't be blank")
    } else if(!isNumber(monthValue)) {
        setError(inputMonth, "Wrong input")
    } else {
        setSuccess(inputMonth)
    }

    if(yearValue === "") {
        setError(inputYear,  "Can't be blank")
    } else if(!isNumber(yearValue)) {
        setError(inputYear, "Wrong input")
    } else {
        setSuccess(inputYear)
    }

    if(cvcValue === "") {
        setError(inputCvc,  "Can't be blank")
    } else if(!isNumber(cvcValue)) {
        setError(inputCvc, "Wrong input")
    } else {
        setSuccess(inputCvc)
    }


}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function isLetter(inputName) {
    return /^[a-zA-Z\s]+$/.test(inputName);
}

function isNumber(input) {
    return /^[0-9 ]+$/.test(input);
}

function isFormValid() {
    const inputContainer = form.querySelectorAll('.input-group');
    let result = true;

    inputContainer.forEach((container) => {
        if(container.classList.contains('error')) {
            result = false;
        }
    });
};

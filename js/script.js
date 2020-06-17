const name = document.getElementById('name');
const otherInput = document.getElementById('other-title');
const jobRole = document.getElementById('title');
const design = document.getElementById('design');
const color = document.getElementById('color')

// Sets focus to the name input
name.focus();


// JOB ROLE CODE
// Hides the other input
otherInput.style.display = 'none'
// Brings the other input back when selected
jobRole.addEventListener('input', () => {
    if(jobRole.value === 'other') {
        otherInput.style.display = 'block'
    } else {
        otherInput.style.display = 'none'
    }
});


// T-SHIRT INFO CODE
// Got all the t-shirt colors
const cornFlowerBlue = document.querySelector('option[value=cornflowerblue]');
const darkSlateGrey = document.querySelector('option[value=darkslategrey]');
const gold = document.querySelector('option[value=gold]');
const tomato = document.querySelector('option[value=tomato]');
const steelBlue = document.querySelector('option[value=steelblue]');
const dimGrey = document.querySelector('option[value=dimgrey]');

// Displays the t-shirt color options
function block(color) {
    color.style.display = 'block';
}

// Removes all the t-shirt color options
function selectTheme()  {
    for(let i = 0; i < color.length; i++) {
        color.options[i].style.display = 'none';
    }
}
selectTheme();

// Creates the text "please select a t-shirt theme"
const option = document.createElement('option');
    option.innerHTML = 'Please select a T-shirt theme';
    color.appendChild(option)
    color.selectedIndex = 6;

// Displays the appropriate color options based on the theme selected
design.addEventListener('input', () => { 
    if(design.value === 'js puns') {
        selectTheme();
        color.selectedIndex = 0;
        block(cornFlowerBlue);
        block(darkSlateGrey);
        block(gold);
    } else if(design.value === 'heart js') {
        selectTheme();
        color.selectedIndex = 3;
        block(tomato);
        block(steelBlue);
        block(dimGrey);
    } else {
        selectTheme();
        color.selectedIndex = 6;
        block(option);
    }
});


// REGISTER FOR ACTIVITES CODE
// Got all the activities 
const all = document.querySelector('input[name=all]');
const jsFrameworks = document.querySelector('input[name=js-frameworks]');
const jsLibs = document.querySelector('input[name=js-libs]');
const express = document.querySelector('input[name=express]');
const node = document.querySelector('input[name=node]');
const buildTools = document.querySelector('input[name=build-tools]');
const npm = document.querySelector('input[name=npm]');
const activities = document.querySelector('.activities');
const array = [all, jsFrameworks, jsLibs, express, node, buildTools, npm];
// Created an element for the total cost
const h3 = document.createElement('h3')
let totalCost = 0;

// This function disables a checkbox
function check(activity, disable) {
    if(activity.checked) {
        disable.disabled = true;
        disable.parentElement.style.color = 'grey';
    } else {
        disable.disabled = false;
        disable.parentElement.style.color = '';
    }
} 

// This function calculates the total cost
function total(activity) {
    activity.addEventListener('change', () => {
        if(activity.checked) {
            const cost = activity.getAttribute('data-cost');
            totalCost += parseInt(cost);
        }
        if(activity.checked === false) {
            const cost = activity.getAttribute('data-cost');
            totalCost -= parseInt(cost); 
        }
        h3.textContent = `Total: ${totalCost}`;
        activities.appendChild(h3);
    });
}

// Call the total function on all the activities
for(let i = 0; i < array.length; i++) {
    total(array[i]);
}

// Disable the appropriate checkbox based on the checkbox selected
activities.addEventListener('change', () => {
    check(jsFrameworks, express);
    check(jsLibs, node);
    check(express, jsFrameworks);
    check(node, jsLibs);
});


// PAYMENT INFO CODE
// Got all the payment options and the payment selector
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

// Hides the paypal and bitcoin payment options initially and sets the payment value to credit card
payment.value = 'credit card'
paypal.style.display = 'none';
bitcoin.style.display = 'none';

// Displays and hides the payment options based on the payment option selected
payment.addEventListener('input', () => { 
    if(payment.value === 'credit card') {
        creditCard.style.display = 'block'
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if(payment.value === 'paypal') {
        creditCard.style.display = 'none'
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    } else if(payment.value === 'bitcoin') {
        creditCard.style.display = 'none'
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';
    } else {
        creditCard.style.display = 'none'
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});


// Form Validation Code
// Got all the users input to validate
const form = document.getElementById('form');
const email = document.getElementById('mail');
const activitiesInput = document.querySelectorAll('.activities input');
const creditCardNum = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
// Created a p element for the error message on the name input
const p = document.createElement('p');
p.style.color = 'red';

// Checks if the name input is empty
const nameValidator = () => {
    if(name.value.length > 0) {
        name.style.border = 'white solid 5px';
        p.remove();
        return true;
    } else {
        name.style.border = 'red solid 3px';
        const forName = document.querySelector('label[for=name]');
        p.textContent = 'The name field can not be empty';
        forName.appendChild(p);
        return false;
    }
}

// Checks if the email has @ and a . after that
const emailVaildator = () => {
    const emailVal = email.value;
    const indexOf = emailVal.indexOf('@');
    const lastIndexOf = emailVal.lastIndexOf('.');
    if(indexOf > 1 && lastIndexOf > indexOf + 1) {
        email.style.border = 'white solid 3px';
        return true;
    } else {
        email.style.border = 'red solid 3px'
        return false;
    }
}

// Checks to see that atleast one activites was chosen
const activitiesValidator = () => {
    for(let i = 0; i < activitiesInput.length; i++) {
        if(activitiesInput[i].checked) {
            activities.style.border = 'white solid 3px';
            return true;
        } 
    }
    activities.style.border = 'red solid 3px';
    return false;
}

// Checks if the credit card number is between 13 and 16 digits.
const creditCardNumberValidator = () => {
    if(/^\d{13,16}$/.test(creditCardNum.value)) {
        creditCardNum.style.border = 'white solid 3px'
        return true;
    } else {
        creditCardNum.style.border = 'red solid 3px'
        return false;
    }
}

// Checks if the zipcode is 5 digits
const zipcodeValidator = () => {
    if(/^\d{5}$/.test(zipcode.value)) {
        zipcode.style.border = 'white solid 3px';
        return true;
    } else {
        zipcode.style.border = 'red solid 3px'
        return false;
    }
}

// Checks if the cvv is 3 digits long.
const cvvValidator = () => {
    if(/^\d{3}$/.test(cvv.value)) {
        cvv.style.border = 'white solid 3px';
        return true;
    } else {
        cvv.style.border = 'red solid 3px';
        return false;
    }
}

// 
form.addEventListener('submit', (e) => {
    nameValidator();
    if(!nameValidator()) {
        e.preventDefault();
    }
    emailVaildator();
    if(!emailVaildator()) {
        e.preventDefault();
    }
    activitiesValidator();
    if(!activitiesValidator()) {
        e.preventDefault();
    }
    if(payment.value === 'credit card') {
        creditCardNumberValidator();
        if(!creditCardNumberValidator()) {
            e.preventDefault();
        }
        zipcodeValidator();
        if(!zipcodeValidator()) {
            e.preventDefault();
        }
        cvvValidator();
        if(!cvvValidator()) {
            e.preventDefault();
        }
    }
});










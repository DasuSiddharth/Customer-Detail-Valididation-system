console.warn('Project 4');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let credit = document.getElementById('credit');
let validName = false;
let validEmail = false;
let validPhone = false;
let validcredit = false;


name.addEventListener('input', function () {
    let reg = /'^(Mr\.|Mrs\.|Ms\.) ([a-z]+)( [a-z]+)*( [a-z]+)*$'/;
    let str = name.value;
    if (reg.test(str)) {
        name.style.borderColor = 'green';
        name.style.borderWidth = '3px';
        validName = true;
    }
    else {
        name.style.borderColor = 'red';
        name.style.borderWidth = '3px';
        validName = false;
    }
})

email.addEventListener('input', function () {
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    let str = email.value;
    if (reg.test(str)) {
        email.style.borderColor = 'green';
        email.style.borderWidth = '3px';
        validEmail = true;
    }
    else {
        email.style.borderColor = 'red';
        email.style.borderWidth = '3px';
        validEmail = false;
    }
})

phone.addEventListener('input', function () {
    let reg = /^([0-9]){10}$/;
    let str = phone.value;
    if (reg.test(str)) {
        phone.style.borderColor = 'green';
        phone.style.borderWidth = '3px';
        validPhone = true;
    }
    else {
        phone.style.borderColor = 'red';
        phone.style.borderWidth = '3px';
        validPhone = false;
    }
})

credit.addEventListener('input', function () {
    let reg = /^([0-9]){10}$/;
    let str = credit.value;
    if (reg.test(str)) {
        credit.style.borderColor = 'green';
        credit.style.borderWidth = '3px';
        validcredit = true;
    }
    else {
        credit.style.borderColor = 'red';
        credit.style.borderWidth = '3px';
        validcredit = false;
    }
})

let message = document.getElementById('success');
subMess = document.getElementById('subMess');
let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    if(validEmail && validName && validPhone && validcredit){
        message.classList.add('show');
        subMess.innerHTML = `<h3>Your form is submitted Sucessfully...</h3>`;
    }
    else{        
        message.classList.remove('show');
        subMess.innerHTML = `<h3>Your form is not submitted...Try Again with valid credentials</h3>`;
    }
})
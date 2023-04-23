var form = document.getElementsByClassName('user-password-fields');
var emailInput = document.getElementById('user');
var passwordInput = document.getElementById('password');
var logInButton = document.getElementById('login-button');
var emailError = document.getElementById('error-email');
var passwordError = document.getElementById('error-password');
var passwordErrorText = passwordError.innerText;
var emailErrorText = emailError.innerText;

emailInput.addEventListener('blur', function(){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    if (emailInput.value != ''){
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.add('valid-field');
        }else {
            emailInput.classList.add('invalid-field');
            emailError.innerText='Please complete with a valid email';
            return;
        }
    }else {
        emailInput.classList.add('invalid-field');
        emailError.innerText='The email field is required';
        return;
    }
});

emailInput.addEventListener('focus', function () {
        emailInput.classList.remove("invalid-field", "valid-field");
        emailError.innerText='';
});

passwordInput.addEventListener('blur', function(){
    if (passwordInput.value != ''){
        if (passwordInput.value.length > 7){
            passwordInput.classList.add('valid-field');
            if (passwordInput.value.search(/[a-zA-Z]/) == -1 || passwordInput.value.search(/[0-9]/) === -1) {
                passwordInput.classList.add('valid-field');
            }else {
                passwordInput.classList.add('invalid-field');
                passwordError.innerText='The password must contain at least 1 number and 1 letter';
                return;
            }
        }else {
            passwordInput.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 8 characters';
            return;
        }
    }else {
        passwordInput.classList.add('invalid-field');
        passwordError.innerText='The password field is required';
        return;
    }
});

passwordInput.addEventListener('focus', function () {
      passwordInput.classList.remove("invalid-field", "valid-field");
      passwordError.innerText='';
});
/*
function isPasswordValid (passwordErrorText){
    return passwordErrorText !== 'The password field is required' &&
    passwordErrorText !== 'The password must contain at least 8 characters' &&
    passwordErrorText !== 'The password must contain at least 1 number and 1 letter';
}

function isEmailValid (emailErrorText) {
    return emailErrorText !== 'Please complete with a valid email' &&
    emailErrorText !== 'The email field is required';

}

/*logInButton.addEventListener('click', function(){
    if (isPasswordValid = false)
} )*/
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
            if (/^(?=.*\d)(?=.*[a-zA-Z])/.test(passwordInput.value)){
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

function isPasswordValid (passwordErrorText){
    if (passwordErrorText == 'The password field is required' ||
    passwordErrorText == 'The password must contain at least 8 characters' ||
    passwordErrorText == 'The password must contain at least 1 number and 1 letter'){
        return false;
    }else {
        return true;
    }
}

function isEmailValid (emailErrorText) {
    if (emailErrorText == 'Please complete with a valid email' ||
    emailErrorText == 'The email field is required'){
        return false;
    }else {
        return true;
    }

}

function checkInputs (isPasswordValid, isEmailValid){
    if (isPasswordValid && isEmailValid) {
    alert('Log in success!');
  } else if (isPasswordValid && !isEmailValid) {
    alert('The email has an error');
    return;
  } else if (!isPasswordValid && isEmailValid) {
    alert('The password has an error');
    return;
  } else {
    alert('The email and the password has an error');
  }
}

logInButton.addEventListener('click', function(event){
    event.preventDefault();

    if (checkInputs(isPasswordValid, isEmailValid)){
        console.log('correcto envío de formulario');
    }else {
        console.log('no se envía el formulario');
        return;
    }
})
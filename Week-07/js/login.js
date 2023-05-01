window.onload = function(){
    var form = document.getElementsByClassName('user-password-fields');
    var emailInput = document.querySelector('#user');
    var passwordInput = document.querySelector('#password');
    var logInButton = document.getElementById('login-button');
    var emailError = document.getElementById('error-email');
    var passwordError = document.getElementById('error-password');

    emailInput.value = localStorage.getItem('email');
    passwordInput.value = localStorage.getItem('password');

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

    function validatePasswordNumberLetter(passwordValue) {
        var passwordHadNumber = false;
        var passwordHadLetter = false;
        for (let i = 0; i < passwordValue.length; i++) {
            var belongAscii = passwordValue.charCodeAt(i);
            if (belongAscii >= 48 && belongAscii <= 57) {
            passwordHadNumber = true;
            } else if ((belongAscii >= 65 && belongAscii <= 90) || (belongAscii >= 97 && belongAscii <= 122)) {
            passwordHadLetter = true;
            }
        }
        return passwordHadNumber && passwordHadLetter;
    }

    passwordInput.addEventListener('blur', function(){
        if (passwordInput.value != ''){
            if (passwordInput.value.length > 7){;
                if (validatePasswordNumberLetter(passwordInput.value)){
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

    logInButton.addEventListener('click', function(event){
        event.preventDefault();
        if(!passwordInput.classList.contains('valid-field') && !emailInput.classList.contains('valid-field')){
            alert('Log in error!! \nPlease check the email and password fields.');
            return;
        }
        if (!passwordInput.classList.contains('valid-field')) {
            alert('Please check the password field.');
            return;
        }
        if (!emailInput.classList.contains('valid-field')) {
            alert('Please check the email field.');
            return;
        }
        var apiUrl = 'https://api-rest-server.vercel.app/login?email=' + emailInput.value + '&password=' + passwordInput.value;

        fetch(apiUrl,{
            method: 'GET',
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                if (data.success){
                    alert('Succes: ' + data.msg +'\nWelcome ' + emailInput.value)
                }else {
                    alert('Error: ' + data)
                }
            })
            .catch(function(error){
                console.log(error);
                alert('Something goes wrong');
            });
    });
}
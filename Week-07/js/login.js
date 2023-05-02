window.onload = function(){
    var form = document.getElementsByClassName('user-password-fields');
    var emailInput = document.querySelector('#user');
    var passwordInput = document.querySelector('#password');
    var logInButton = document.getElementById('login-button');
    var emailError = document.getElementById('error-email');
    var passwordError = document.getElementById('error-password');
    var showHidePasswordButton = document.getElementById('password-visibility');

    emailInput.value = localStorage.getItem('email');
    passwordInput.value = localStorage.getItem('password');

    function emailCheck() {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
        if (emailInput.value === ''){
            emailInput.classList.add('invalid-field');
            emailError.innerText='The email field is required';
            return;
        }
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('invalid-field');
            emailError.innerText='Please complete with a valid email';
            return;
        }
            emailInput.classList.add('valid-field');
    };

    emailInput.addEventListener('focus', function () {
            emailInput.classList.remove("invalid-field", "valid-field");
            emailError.innerText='';
    });

    emailInput.addEventListener('blur', emailCheck);

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

    function passwordCheck (){
        if (passwordInput.value === '') {
            passwordInput.classList.add('invalid-field');
            passwordError.innerText='The password field is required';
            return;
        }
        if (passwordInput.value < 7) {
            passwordInput.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 8 characters';
            return;
        }
        if (passwordInput.value >15) {
            passwordInput.classList.add('invalid-field');
            passwordError.innerText = 'The password max characters is 15'
        }
        if (!validatePasswordNumberLetter(passwordInput.value)) {
            passwordInput.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 1 number and 1 letter';
            return;
        }
        passwordInput.classList.add('valid-field');
    }

    passwordInput.addEventListener('blur', passwordCheck);

    passwordInput.addEventListener('focus', function () {
        passwordInput.classList.remove("invalid-field", "valid-field");
        passwordError.innerText='';
    });

    showHidePasswordButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          showHidePasswordButton.classList.add('password-visible');
        } else {
          passwordInput.type = 'password';
          showHidePasswordButton.classList.remove('password-visible');
        }
      });

      var modalTextSuccess = document.getElementsByClassName('modal-text-success');
      var modalTextError = document.getElementsByClassName('modal-text-error');

      function hideCloseModals(){
         var hideWhenClosed = document.getElementsByClassName('hide-when-closed');
        for (var i = 0; i < hideWhenClosed.length; i++) {
            hideWhenClosed[i].style.display = 'none';
        }
      }

      function showAlertSuccess() {
        var modalSuccess = document.getElementById('modal-container-success');
        modalSuccess.style.display = 'block';
        var closeCrossSuccess = document.getElementsByClassName('close-success')[0];
        closeCrossSuccess.onclick = function () {
            modalTextSuccess.innerText = ''
            modalSuccess.style.display = 'none';
            hideCloseModals();
        };
        var closeButtonSuccess = document.getElementsByClassName('close-button-success')[0];
        closeButtonSuccess.onclick = function () {
            modalTextSuccess.innerText = ''
            modalSuccess.style.display = 'none';
            hideCloseModals();
        };
      }

      function showAlertError() {
        var modalError = document.getElementById('modal-container-error');
        modalError.style.display = 'block';
        var closeCrossError = document.getElementsByClassName('close-error')[0];
        closeCrossError.onclick = function () {
            modalTextError.innerText = ''
            modalError.style.display = 'none';
            hideCloseModals();
        };
        var closeButtonError = document.getElementsByClassName('close-button-error')[0];
        closeButtonError.onclick = function () {
            modalTextError.innerText = ''
            modalError.style.display = 'none';
            hideCloseModals();
        };
      }

    logInButton.addEventListener('click', function(event){
        event.preventDefault();
        emailCheck();
        passwordCheck();
        if(!passwordInput.classList.contains('valid-field') && !emailInput.classList.contains('valid-field')){
            modalTextError.innerText = 'Log in error!! \nPlease check the email and password fields.'
            showAlertError()
            //alert('Log in error!! \nPlease check the email and password fields.');
            return;
        }
        if (!passwordInput.classList.contains('valid-field')) {
            modalTextError.innerText = 'Please check the password field.'
            showAlertError()
            //alert('Please check the password field.');
            return;
        }
        if (!emailInput.classList.contains('valid-field')) {
            modalTextError.innerText = 'Please check the email field.'
            showAlertError()
            //alert('Please check the email field.');
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
                    modalTextSuccess.innerText = 'Succes: ' + data.msg +'\nWelcome ' + emailInput.value
                    showAlertSuccess()
                    //alert('Succes: ' + data.msg +'\nWelcome ' + emailInput.value)
                }else {
                    modalTextError.innerText = 'Error: ' + data
                    showAlertError()
                    //alert('Error: ' + data)
                }
            })
            .catch(function(error){
                modalTextError.innerText = 'Something goes wrong'
                showAlertError()
                //alert('Something goes wrong');
            });
    });
}
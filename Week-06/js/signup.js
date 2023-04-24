var formRegister = document.getElementsByClassName('register-form');
var registerNameField = document.getElementById('name');
var nameError = document.getElementById('name-error');
var registerSurnameField = document.getElementById('surname');
var surnameError = document.getElementById('surname-error');
var registerDniField = document.getElementById('dni');
var dniError = document.getElementById('dni-error');
var registerDateBirthField = document.getElementById('date-of-birth');
var dateError = document.getElementById('date-error');
var registerPhoneNumberField = document.getElementById('phone');
var phoneError = document.getElementById('phone-error');
var registerPhoneNumberSecondField = document.getElementById('phone-second');
var phoneSecondError = document.getElementById('phone-second-error');
var registerAdressField = document.getElementById('adress');
var adressError = document.getElementById('adress-error');
var registerCityField = document.getElementById('city');
var cityError = document.getElementById('city-error');
var registerPostalCodeField = document.getElementById('postal-code');
var postalCodeError = document.getElementById('postal-code-error');
var registerEmailField = document.getElementById('email');
var emailError = document.getElementById('email-error');
var registerPasswordField = document.getElementById('register-password');
var passwordError = document.getElementById('register-password-error');
var registerPasswordRepeatField = document.getElementById('repeat-register-password');
var passwordRepeatError = document.getElementById('repeat-register-password-error');
var registerAcceptConditionsCheckbox = document.getElementById('accept-conditions');
var registerButton = document.getElementsByClassName('register-button');

registerNameField.addEventListener('blur', function(){
    if(registerNameField.value != ''){
        if(isNaN(registerNameField.value)){
            var hadNumber = true;
            for(let i = 0; i < registerNameField.value.length; i++){
                if(!isNaN(registerNameField.value[i])){
                    hadNumber = false;
                    break;
                }
            }
            if(hadNumber){
                if(registerNameField.value.length > 2){
                registerNameField.classList.add('valid-field');
                }else {
                    registerNameField.classList.add('invalid-field');
                    nameError.innerText = 'The name must have at least 3 characters';
                    return;
                }
                }else{
                    registerNameField.classList.add('invalid-field');
                    nameError.innerText = 'The name only must contain letters';
                    return;
                }
            }
    }else {
        registerNameField.classList.add('invalid-field');
        nameError.innerText = 'This field is required';
        return;
    }
})

registerNameField.addEventListener('focus',function(){
    registerNameField.classList.remove('invalid-field', 'valid-field');
    nameError.innerText='';
})

registerSurnameField.addEventListener('blur', function(){
    if(registerSurnameField.value != ''){
        if(isNaN(registerSurnameField.value)){
            var hadNumber = true;
            for(let i = 0; i < registerSurnameField.value.length; i++){
                if(!isNaN(registerSurnameField.value[i])){
                    hadNumber = false;
                    break;
                }
            }
            if(hadNumber){
                if(registerSurnameField.value.length > 2){
                registerSurnameField.classList.add('valid-field');
                }else {
                    registerSurnameField.classList.add('invalid-field');
                    surnameError.innerText = 'The surname must have at least 3 characters';
                    return;
                }
                }else{
                    registerSurnameField.classList.add('invalid-field');
                    surnameError.innerText = 'The surname only must contain letters';
                    return;
                }
            }
    }else {
        registerSurnameField.classList.add('invalid-field');
        surnameError.innerText = 'This field is required';
        return;
    }
})

registerSurnameField.addEventListener('focus',function(){
    registerSurnameField.classList.remove('invalid-field', 'valid-field');
    surnameError.innerText='';
})

registerDniField.addEventListener('blur', function(){
    if(registerDniField.value != ''){
        if(!isNaN(registerDniField.value)){
            if(registerDniField.value.length > 6){
            registerDniField.classList.add('valid-field');
            }else {
                registerDniField.classList.add('invalid-field');
                dniError.innerText = 'The dni must have at least 7 characters';
                return;
            }
        }else{
            registerDniField.classList.add('invalid-field');
            dniError.innerText = 'The dni only must contain numbers';
            return;
        }
    }else {
        registerDniField.classList.add('invalid-field');
        dniError.innerText = 'This field is required';
        return;
    }
})

registerDniField.addEventListener('focus',function(){
    registerDniField.classList.remove('invalid-field', 'valid-field');
    dniError.innerText='';
})

//Generar validación de fechas


registerPhoneNumberField.addEventListener('blur', function(){
    if(registerPhoneNumberField.value != ''){
        if(!isNaN(registerPhoneNumberField.value)){
            if(registerPhoneNumberField.value.length === 10){
            registerPhoneNumberField.classList.add('valid-field');
            }else {
                registerPhoneNumberField.classList.add('invalid-field');
                phoneError.innerText = 'The phone number must have 10 characters';
                return;
            }
        }else{
            registerPhoneNumberField.classList.add('invalid-field');
            phoneError.innerText = 'The phone number only must contain numbers';
            return;
        }
    }else {
        registerPhoneNumberField.classList.add('invalid-field');
        phoneError.innerText = 'This field is required';
        return;
    }
})

registerPhoneNumberField.addEventListener('focus',function(){
    registerPhoneNumberField.classList.remove('invalid-field', 'valid-field');
    phoneError.innerText='';
})

registerPhoneNumberSecondField.addEventListener('blur', function(){
    if(registerPhoneNumberSecondField.value != ''){
        if(!isNaN(registerPhoneNumberSecondField.value)){
            if(registerPhoneNumberSecondField.value.length === 10){
            registerPhoneNumberSecondField.classList.add('valid-field');
            }else {
                registerPhoneNumberSecondField.classList.add('invalid-field');
                phoneSecondError.innerText = 'The phone number must have 10 characters';
                return;
            }
        }else{
            registerPhoneNumberSecondField.classList.add('invalid-field');
            phoneSecondError.innerText = 'The phone number only must contain numbers';
            return;
        }
    }else{
        registerPhoneNumberSecondField.classList.remove('invalid-field');
        phoneSecondError.innerText = '';
    }
})

registerPhoneNumberSecondField.addEventListener('focus',function(){
    registerPhoneNumberSecondField.classList.remove('invalid-field', 'valid-field');
    phoneSecondError.innerText='';
})

//Generar validación de adress

registerCityField.addEventListener('blur', function(){
    if(registerCityField.value != ''){
        if(registerCityField.value.length > 2){
            registerCityField.classList.add('valid-field');
        }else{
            registerCityField.classList.add('invalid-field');
            cityError.innerText = 'The city name must have at least 3 characters';
            return;
        }
    }else {
        registerCityField.classList.add('invalid-field');
        cityError.innerText = 'This field is required';
        return;
    }
})

registerCityField.addEventListener('focus', function(){
    registerCityField.classList.remove('valid-field', 'invalid-field');
    cityError.innerText = '';
})

registerPostalCodeField.addEventListener('blur', function(){
    if(registerPostalCodeField.value != ''){
        if(!isNaN(registerPostalCodeField.value)){
            if(registerPostalCodeField.value.length !== 4 && registerPostalCodeField.value.length !== 5){
                registerPostalCodeField.classList.add('invalid-field');
                postalCodeError.innerText = 'The postal code must have 4 or 5 characters';
                return;
            }else {
                registerPostalCodeField.classList.add('valid-field');
            }
        }else{
            registerPostalCodeField.classList.add('invalid-field');
            postalCodeError.innerText = 'The postal code only must contain numbers';
            return;
        }
    }else {
        registerPostalCodeField.classList.add('invalid-field');
        postalCodeError.innerText = 'This field is required';
        return;
    }
})

registerPostalCodeField.addEventListener('focus',function(){
    registerPostalCodeField.classList.remove('invalid-field', 'valid-field');
    postalCodeError.innerText='';
})

registerEmailField.addEventListener('blur', function(){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    if (registerEmailField.value != ''){
        if (emailRegex.test(registerEmailField.value)) {
            registerEmailField.classList.add('valid-field');
        }else {
            registerEmailField.classList.add('invalid-field');
            emailError.innerText='Please complete with a valid email';
            return;
        }
    }else {
        registerEmailField.classList.add('invalid-field');
        emailError.innerText='The email field is required';
        return;
    }
});

registerEmailField.addEventListener('focus', function () {
        registerEmailField.classList.remove("invalid-field", "valid-field");
        emailError.innerText='';
});

registerPasswordField.addEventListener('blur', function(){
    if (registerPasswordField.value != ''){
        if (registerPasswordField.value.length > 7){
            registerPasswordField.classList.add('valid-field');
            if (/^(?=.*\d)(?=.*[a-zA-Z])/.test(registerPasswordField.value)){
                registerPasswordField.classList.add('valid-field');
            }else {
                registerPasswordField.classList.add('invalid-field');
                passwordError.innerText='The password must contain at least 1 number and 1 letter';
                return;
            }
        }else {
            registerPasswordField.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 8 characters';
            return;
        }
    }else {
        registerPasswordField.classList.add('invalid-field');
        passwordError.innerText='The password field is required';
        return;
    }
});

registerPasswordField.addEventListener('focus', function () {
      registerPasswordField.classList.remove("invalid-field", "valid-field");
      passwordError.innerText='';
});

registerPasswordRepeatField.addEventListener('blur', function(){
    if(registerPasswordRepeatField.value != ''){
        if(registerPasswordRepeatField.value == registerPasswordField.value){
            registerPasswordRepeatField.classList.add('valid-field');
        }else {
            registerPasswordRepeatField.classList.add('invalid-field');
            passwordRepeatError.innerText = 'The password doesn\'t match, please check';
            return;
        }
    }else {
        registerPasswordRepeatField.classList.add('invalid-field');
        passwordRepeatError.innerText = 'This field is required';
        return;
    }
})

registerPasswordRepeatField.addEventListener('focus', function(){
    registerPasswordRepeatField.classList.remove('invalid-field', 'valid-field');
    passwordRepeatError.innerText = '';
})
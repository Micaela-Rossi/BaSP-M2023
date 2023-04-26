window.onload = function(){
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
    var registeraddressField = document.getElementById('address');
    var addressError = document.getElementById('address-error');
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
    var areInputsValid = document.getElementsByClassName('inputs-fields');
    var registerButton = document.getElementById('register-button');
    var submitError = document.getElementById('submit-error');
    var results = [
        { error: true, msg: 'Name is required' },
        { error: true, msg: 'Surname is required' },
        { error: true, msg: 'DNI is required' },
        { error: true, msg: 'Date of birth is required' },
        { error: true, msg: 'Phone number is required' },
        { error: true, msg: 'Phone number 2 is required' },
        { error: true, msg: 'Address is required' },
        { error: true, msg: 'City is required' },
        { error: true, msg: 'Postal Code is required' },
        { error: true, msg: 'Email is required' },
        { error: true, msg: 'Password is required' },
        { error: true, msg: 'Repeat Password is required' },
        { error: true, msg: 'Terms and conditions are required' },
        ];

    registerNameField.addEventListener('blur', function () {
        if (registerNameField.value === '') {
            registerNameField.classList.add('invalid-field');
            nameError.innerText = 'This field is required';
            results[0] = {
                error: true,
                msg: 'This field is required'
            }
            return;
        }
        if (registerNameField.value.length < 3) {
            registerNameField.classList.add('invalid-field');
            nameError.innerText = 'Name must have at least 3 characters';
            results[0] = {
                error: true,
                msg: 'Name must have at least 3 characters'
            }
            return;
        }
        for (let i = 0; i < registerNameField.value.length; i++) {
            if (parseInt(registerNameField.value[i])) {
                registerNameField.classList.add('invalid-field');
                nameError.innerText = 'The name only must contain letters';
                results[0] = {
                    error: true,
                    msg: 'The name only must contain letters'
                }
                return;
            }
        }
            registerNameField.classList.add('valid-field');
            results[0] = {
                error: false,
                msg: 'The name ' + registerNameField.value + ' is success'
                }
    });

    registerNameField.addEventListener('focus', function () {
        registerNameField.classList.remove('invalid-field', 'valid-field');
        nameError.innerText = '';
        results[0] = {
            error: false,
            msg: ''
            }
    });

    registerSurnameField.addEventListener('blur', function () {
        if (registerSurnameField.value === '') {
            registerSurnameField.classList.add('invalid-field');
            surnameError.innerText = 'This field is required';
            results[1] = {
                error: true,
                msg: 'This field is required'
            }
            return;
        }
        if (registerSurnameField.value.length < 3) {
            registerSurnameField.classList.add('invalid-field');
            surnameError.innerText = 'Surname must have at least 3 characters';
            results[1] = {
                error: true,
                msg: 'Surname must have at least 3 characters'
            }
            return;
        }
        for (let i = 0; i < registerSurnameField.value.length; i++) {
            if (parseInt(registerSurnameField.value[i])) {
                registerSurnameField.classList.add('invalid-field');
                surnameError.innerText = 'The surname only must contain letters';
                results[1] = {
                    error: true,
                    msg: 'The surname only must contain letters'
                }
                return;
            }
        }
        registerSurnameField.classList.add('valid-field');
        results[1] = {
            error: false,
            msg: 'The surname ' + registerSurnameField.value + ' is success'
        }
    }
    );

    registerSurnameField.addEventListener('focus', function () {
        registerSurnameField.classList.remove('invalid-field', 'valid-field');
        nameError.innerText = '';
        results[1] = {
            error: false,
            msg: ''
        }
    });

    registerDniField.addEventListener('blur', function(){
        if(registerDniField.value === ''){
            registerDniField.classList.add('invalid-field');
            dniError.innerText = 'This field is required';
            results[2] = {
                error: true,
                msg: 'The dni is required'
            }
            return;
        }
        if(isNaN(registerDniField.value)){
            registerDniField.classList.add('invalid-field');
            dniError.innerText = 'The dni only must contain numbers';
            results[2] = {
                error: true,
                msg:'The dni only must contain numbers'
            }
        }
        if(registerDniField.value.length < 6){
            registerDniField.classList.add('invalid-field');
            dniError.innerText = 'The dni must have at least 7 characters';
            results[2] = {
                error: true,
                msg:'The dni must have at least 7 characters'
            }
            return;
        }
        registerDniField.classList.add('valid-field');
        results[2] = {
            error: false,
            msg: 'The Dni ' + registerDniField.value + ' is success'
        }
    });

    registerDniField.addEventListener('focus',function(){
        registerDniField.classList.remove('invalid-field', 'valid-field');
        dniError.innerText='';
        results[2] = {
            error: false,
            msg: ''
        }
    });

    registerDateBirthField.addEventListener('blur', function () {
        var now = new Date();
        if (registerDateBirthField.value === '') {
            registerDateBirthField.classList.add('invalid-field');
            dateError.innerText = 'This field is required';
            results[3] ={
                error: true,
                msg: 'The date of birthday is required'
            }
            return;
        }
        if (
            registerDateBirthField.value.length == 10 &&
            registerDateBirthField.value[2] == '/' &&
            registerDateBirthField.value[5] == '/'
        ) {
            var day = parseInt(registerDateBirthField.value.substr(0, 2), 10);
            var month = parseInt(registerDateBirthField.value.substr(3, 5), 10);
            var year = parseInt(registerDateBirthField.value.substr(6, 10), 10);

            if (isNaN(new Date(`${year}/${month}/${day}`).getTime())) {
                registerDateBirthField.classList.add('invalid-field');
                dateError.innerText = 'Insert valid date DD/MM/YYYY';
                results[3] ={
                    error: true,
                    msg: 'Insert valid date DD/MM/YYYY'
                }
                return;
            }
            if (
                new Date(`${year}/${month}/${day}`).getTime() <=
                new Date(
                    `${now.getFullYear() - 18}/${now.getMonth()}/${now.getDay()}`
                ).getTime()
            ) {
                registerDateBirthField.classList.add('valid-field');
                results[3] = {
                    error: false,
                    msg: 'The date ' + registerDateBirthField.value + ' is success'
                }
                return
            } else {
                registerDateBirthField.classList.add('invalid-field');
                dateError.innerText = 'you must be over 18 years old';
                results[3] ={
                    error: true,
                    msg: 'you must be over 18 years old'
                }
                return;
            }
        }
    });

    registerDateBirthField.addEventListener('focus', function () {
        registerDateBirthField.classList.remove('valid-field', 'invalid-field');
        dateError.innerText = '';
        results[3] ={
            error: false,
            msg: ''
        }
    });

    registerPhoneNumberField.addEventListener('blur', function(){
        if(registerPhoneNumberField.value === ''){
            registerPhoneNumberField.classList.add('invalid-field');
            phoneError.innerText = 'This field is required';
            results[4] = {
                error: true,
                msg: 'The phone number is required'
            }
            return;
        }
        if(isNaN(registerPhoneNumberField.value)){
            registerPhoneNumberField.classList.add('invalid-field');
            phoneError.innerText = 'The phone number only must contain numbers';
            results[4] = {
                error: true,
                msg: 'The phone number only must contain numbers'
            }
            return;
        }
        if(registerPhoneNumberField.value.length != 10){
            registerPhoneNumberField.classList.add('invalid-field');
            phoneError.innerText = 'The phone number must have 10 characters';
            results[4] = {
                error: true,
                msg: 'The phone number must have 10 characters'
            }
            return;
        }
        registerPhoneNumberField.classList.add('valid-field');
        results[4] = {
            error: false,
            msg: 'The phone number ' + registerPhoneNumberField.value + ' is success'
        }
        registerPhoneNumberField.addEventListener('focus',function(){
            registerPhoneNumberField.classList.remove('invalid-field', 'valid-field');
            phoneError.innerText='';
            results[4] = {
                error: false,
                msg: ''
            }
    });

    registerPhoneNumberSecondField.addEventListener('blur', function(){
        if(registerPhoneNumberSecondField.value === ''){
            registerPhoneNumberSecondField.classList.add('invalid-field');
            phoneSecondError.innerText = 'This field is required';
            results[5] = {
                error: true,
                msg: 'The phone number 2 is required'
            }
            return;
        }
        if(isNaN(registerPhoneNumberSecondField.value)){
            registerPhoneNumberSecondField.classList.add('invalid-field');
            phoneSecondError.innerText = 'The phone number only must contain numbers';
            results[5] = {
                error: true,
                msg: 'The phone number only must contain numbers'
            }
            return;
        }
        if(registerPhoneNumberSecondField.value.length != 10){
            registerPhoneNumberSecondField.classList.add('invalid-field');
            phoneSecondError.innerText = 'The phone number must have 10 characters';
            results[5] = {
                error: true,
                msg: 'The phone number must have 10 characters'
            }
            return;
        }
        if(registerPhoneNumberSecondField.value === registerPhoneNumberField.value){
            registerPhoneNumberSecondField.classList.add('invalid-field');
            phoneSecondError.innerText = 'This phone number must be different from the first';
            results[5] = {
                error: true,
                msg: 'This phone number must be different from the first'
            }
            return;
        }
        registerPhoneNumberSecondField.classList.add('valid-field');
        results[5] = {
            error: false,
            msg: 'This phone number ' + registerPhoneNumberSecondField.value + ' is success'
        }
    })

    registerPhoneNumberSecondField.addEventListener('focus',function(){
        registerPhoneNumberSecondField.classList.remove('invalid-field', 'valid-field');
        phoneSecondError.innerText='';
        results[5] = {
            error: false,
            msg: ''
        }
    });

    registeraddressField.addEventListener('blur', function (){
        if (registeraddressField.value.trim() === ''){
            registeraddressField.classList.add('invalid-field');
            addressError.innerText = 'This field is required';
            results[6] = {
                error: true,
                msg: 'The address is required'
            }
            return;
        }
        if (registeraddressField.value.length < 4) {
            registeraddressField.classList.add('invalid-field');
            addressError.innerText = 'This field must have at least 5 characters.';
            results[6] = {
                error: true,
                msg: 'This field must have at least 5 characters.'
            }
            return;
        }
        if (registeraddressField.value.trim().indexOf(' ') === -1){
            registeraddressField.classList.add('invalid-field');
            addressError.innerText = 'This field must have a space between therms.';
            results[6] = {
                error: true,
                msg: 'This field must have a space between therms.'
            }
            return;
        }
        var hasLetter = false;
        var hasNumber = false;
        for (var i2 = 0; i2 < registeraddressField.value.length; i2++) {
            var isAscii = registeraddressField.value.charCodeAt(i2);
            if ((isAscii >= 65 && isAscii <= 90) || (isAscii >= 97 && isAscii <= 122)) {
                hasLetter = true;
            } else if (isAscii >= 48 && isAscii <= 57) {
                hasNumber = true;
            }
        }
        if (!hasLetter && !hasNumber){
            registeraddressField.classList.add('invalid-field');
            addressError.innerText = 'The adrres must have numbers and letters.';
            results[6] = {
                error: true,
                msg: 'The adrres must have numbers and letters'
            }
            return;
        }
        registeraddressField.classList.add('valid-field');
            results[6] = {
                error: false,
                msg: 'The address ' + registeraddressField.value + ' is success'
            }
    });

    registeraddressField.addEventListener('focus', function(){
        registeraddressField.classList.remove('invalid-field', 'valid-field');
        addressError.innerText = '';
        results[6] = {
            error: false,
            msg: ''
        }
    });

    registerCityField.addEventListener('blur', function(){
        if(registerCityField.value === ''){
            registerCityField.classList.add('invalid-field');
            cityError.innerText = 'This field is required';
            results[7] = {
                error: true,
                msg: 'The city is required'
            }
            return;
        }
        if(registerCityField.value.length < 2){
            registerCityField.classList.add('invalid-field');
            cityError.innerText = 'The city name must have at least 3 characters';
            results[7] = {
                error: true,
                msg: 'The city name must have at least 3 characters'
            }
            return;
        }
        registerCityField.classList.add('valid-field');
        results[7] = {
            error: false,
            msg: 'The city ' + registerCityField.value + ' is success'
        }
    });

    registerCityField.addEventListener('focus', function(){
        registerCityField.classList.remove('valid-field', 'invalid-field');
        cityError.innerText = '';
        results[7] = {
            error: false,
            msg: ''
        }
    });

    registerPostalCodeField.addEventListener('blur', function(){
        if(registerPostalCodeField.value === ''){
            registerPostalCodeField.classList.add('invalid-field');
            postalCodeError.innerText = 'This field is required';
            results[8] = {
                error: true,
                msg: 'This postal code is required'
            }
            return;
        }
        if(isNaN(registerPostalCodeField.value)){
            registerPostalCodeField.classList.add('invalid-field');
            postalCodeError.innerText = 'The postal code only must contain numbers';
            results[8] = {
                error: true,
                msg: 'The postal code only must contain numbers'
            }
            return;
        }
        if(registerPostalCodeField.value.length !== 4 && registerPostalCodeField.value.length !== 5){
            registerPostalCodeField.classList.add('invalid-field');
            postalCodeError.innerText = 'The postal code must have 4 or 5 characters';
            results[8] = {
                error: true,
                msg: 'The postal code must have 4 or 5 characters'
            }
            return;
        }
        registerPostalCodeField.classList.add('valid-field');
        results[8] = {
            error:false,
            msg: 'The postal code ' + registerPostalCodeField.value + ' is success'
        }
    });

    registerPostalCodeField.addEventListener('focus',function(){
        registerPostalCodeField.classList.remove('invalid-field', 'valid-field');
        postalCodeError.innerText='';
        results[8] = {
            error: false,
            msg: ''
        }
    });

    registerEmailField.addEventListener('blur', function(){
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
        if (registerEmailField.value === ''){
            registerEmailField.classList.add('invalid-field');
            emailError.innerText='The email field is required';
            results[9] = {
                error: true,
                msg: 'The email field is required'
            }
            return;
        }
        if (!emailRegex.test(registerEmailField.value)) {
            registerEmailField.classList.add('invalid-field');
            emailError.innerText='Please complete with a valid email';
            results[9] = {
                error: true,
                msg: 'Please complete with a valid email'
            }
            return;
        }
        registerEmailField.classList.add('valid-field');
        results[9] = {
            error: false,
            msg: 'The email ' + registerEmailField.value + ' is success'
        }
    });

    registerEmailField.addEventListener('focus', function () {
            registerEmailField.classList.remove("invalid-field", "valid-field");
            emailError.innerText='';
            results[9] = {
                error: false,
                msg: ''
            }
    });

    var passwordValue = registerPasswordField.value;

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

    registerPasswordField.addEventListener('blur', function(){
        if (registerPasswordField.value === ''){
            registerPasswordField.classList.add('invalid-field');
            passwordError.innerText='The password field is required';
            results[10] = {
                error: true,
                msg: 'The password field is required'
            }
            return;
        }
        if (registerPasswordField.value.length < 8){
            registerPasswordField.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 8 characters';
            results[10] = {
                error: true,
                msg: 'The password must contain at least 8 characters'
            }
            return;
        }
        if (!validatePasswordNumberLetter(registerPasswordField.value)){
            registerPasswordField.classList.add('invalid-field');
            passwordError.innerText='The password must contain at least 1 number and 1 letter';
            results[10] = {
                error: true,
                msg: 'The password must contain at least 1 number and 1 letter'
            }
            return;
        }
        registerPasswordField.classList.add('valid-field');
        results[10] = {
            error: false,
            msg: 'The password ' + registerPasswordField.value + ' is success'
        }
    });

    registerPasswordField.addEventListener('focus', function () {
        registerPasswordField.classList.remove("invalid-field", "valid-field");
        passwordError.innerText='';
        results[10] = {
            error: false,
            msg: ''
        }
    });

    registerPasswordRepeatField.addEventListener('blur', function(){
        if(registerPasswordRepeatField.value === ''){
            registerPasswordRepeatField.classList.add('invalid-field');
            passwordRepeatError.innerText = 'This field is required';
            results[11] = {
                error: true,
                msg: 'The repeat password field is required'
            }
            return;
        }
        if(registerPasswordRepeatField.value !== registerPasswordField.value){
            registerPasswordRepeatField.classList.add('invalid-field');
            passwordRepeatError.innerText = 'The password doesn\'t match, please check';
            results[11] = {
                error: true,
                msg: 'The password doesn\'t match, please check'
            }
            return;
        }
        registerPasswordRepeatField.classList.add('valid-field');
        results[11] = {
            error: false,
            msg: 'The password repeat ' + registerPasswordRepeatField.value + ' is success'
        }
    });

    registerPasswordRepeatField.addEventListener('focus', function(){
        registerPasswordRepeatField.classList.remove('invalid-field', 'valid-field');
        passwordRepeatError.innerText = '';
        results[11] = {
            error: false,
            msg: ''
        }
    });

    registerAcceptConditionsCheckbox.addEventListener('click', function(){
        if(!registerAcceptConditionsCheckbox.checked){
            submitError.innerText = 'Please accept terms and condition to finish the register';
            results[12] = {
                error: true,
                msg: 'Terms and conditions are required'
            }
            return;
        }
        registerAcceptConditionsCheckbox.checked
            results[12] = {
                error: false,
                msg: 'Thanks for agree to the terms and conditions'
            }
    })

    var isValid = true;

    for (var i = 0; i < areInputsValid.length; i++) {
        if ( areInputsValid[i].value === '' || !areInputsValid[i].classList.contains('valid-field')) {
            isValid = false;
            break;
        }
    }

    registerButton.addEventListener('click', function (event) {
        var isValid = true;
        for (var i = 0; i < 13; i++) {
            if (
                results[i].error
            ) {
                isValid = false;
                break;
            }
        }
            var stringAlert = ' ';
            for (var i=0; i < 13; i++) {
                stringAlert += results[i].msg + '\n'
            }
            if (isValid) {
                alert('submit success \n' + stringAlert);
                event.preventDefault();
            } else {
                alert(
                    'Register failed! \nPlease check the fields are all complete and without errors \n' + stringAlert
                );
                event.preventDefault();
            }
    });
});}
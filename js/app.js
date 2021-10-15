window.onload = function () {
    var fullNameInput = document.getElementById('input-fullName');
    fullNameInput.addEventListener('blur',checkFullName);
    fullNameInput.addEventListener('focus',focusFullName);
    var emailInput = document.getElementById('input-email');
    emailInput.addEventListener('blur',checkEmail);
    emailInput.addEventListener('focus',focusEmail);
    var passwordInput = document.getElementById('input-password');
    passwordInput.addEventListener('blur',checkPassword);
    passwordInput.addEventListener('focus',focusPassword);
    var ageInput = document.getElementById('input-age');
    ageInput.addEventListener('blur',checkAge);
    ageInput.addEventListener('focus',focusAge);
    var phoneInput = document.getElementById('input-phone');
    phoneInput.addEventListener('blur',checkPhone);
    phoneInput.addEventListener('focus',focusPhone);
    var addressInput = document.getElementById('input-address');
    addressInput.addEventListener('blur',checkAddress);
    addressInput.addEventListener('focus',focusAddress);
    var cityInput = document.getElementById('input-city');
    cityInput.addEventListener('blur',checkCity);
    cityInput.addEventListener('focus',focusCity);
    var zipCodeInput = document.getElementById('input-zipCode');
    zipCodeInput.addEventListener('blur',checkZipCode);
    zipCodeInput.addEventListener('focus',focusZipCode);
    var idCardInput = document.getElementById('input-idCard');
    idCardInput.addEventListener('blur',checkIDCard);
    idCardInput.addEventListener('focus',focusIDCard);
    var buttonSend = document.getElementById('button-send');
    buttonSend.addEventListener('click',sendForm);

    var errorList = [];

    function checkFullName(e){
        validateFullName(e.target.value);
    }
    function checkEmail(e){
        validateEmail(e.target.value);
    }
    function checkPassword(e){
        validatePassword(e.target.value);
    }
    function checkAge(e){
        validateAge(e.target.value);
    }
    function checkPhone(e){
        validatePhone(e.target.value);
    }
    function checkAddress(e){
        validateAddress(e.target.value);
    }
    function checkCity(e){
        validateCity(e.target.value);
    }
    function checkZipCode(e){
        validateZipCode(e.target.value);
    }
    function checkIDCard(e){
        validateIDCard(e.target.value);
    }
    function validateFullName(content){
        var array = content.split('');
        var arrayNumber = getArrayNumber(array);
        if(content.length === 0){
            var element = document.getElementById("empty-fullName");
            fullNameInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese un nombre completo')
        }
        else if (!validateCantLetter(arrayNumber)|| content.indexOf(' ') === -1){
            var element = document.getElementById("error-fullName");
            fullNameInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('El nombre debe ser mayor a 6 caracteres y contener un espacio')
        }
    }
    function validateCantLetter(array){
        var cont = 0;
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) === 'string' && array[i] !== ' '){
                cont = cont + 1;
            }
        }
        if (cont > 6){
            return true
        }
        else{
            return false
        }
    }
    function validateEmail(content){
        var array = content.split('');
        var arrayNumber = getArrayNumber(array);
        if(content.length === 0){
            var element = document.getElementById("empty-email");
            emailInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese un email');
        }
        else if (validateHasSpace(arrayNumber) || !validateHasString(arrayNumber) || !validateHasAt(arrayNumber) || !validateHasDot(arrayNumber) || validateOrderEmail(arrayNumber)){
            var element = document.getElementById("error-email");
            emailInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('El mail debe seguir el formato de email. Ej: xxx@yyy.zzz');
        }
    }
    function validateHasAt(array){
        if(array.indexOf('@') !== -1){
            return true
        }
        return false
    }
    function validateHasDot(array){
        if(array.indexOf('.') !== -1){
            return true
        }
        return false
    }
    function validateOrderEmail(array){
        var indexLetter = null;
        var indexAt = null;
        var indexDot = null;
        var i = 0;
        do {
            if(typeof (array[i]) === 'string'){
                indexLetter = i;
            }
            else{
                i++;
            }
        } while (indexLetter === null);
        var j = array.indexOf('@');
        var k = array.indexOf('.');
        if (i < j && i < k && j < k && j === k - 1  && k !== array.length - 1){
            return true;
        }
        else{
            return false
        }
    }
    function validatePassword(content){
        var array = content.split('');
        var arrayPassword = getArrayNumber(array);
        if(content.length === 0){
            var element = document.getElementById("empty-password");
            passwordInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese una contraseña');
        }
        else if (content.indexOf(' ') !== -1 || content.length < 8 || !validateLetter(arrayPassword) || !validateNumber(arrayPassword)) {
            var element = document.getElementById("error-password");
            passwordInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('La contraseña debe tener al menos 8 caracteres y contener un letras y números');
        }
    }
    function getArrayNumber(array){
        var newArray = [];
        array.forEach(item => {
            if (isNaN(parseInt(item))){
                newArray.push(item);
            }
            else{
                newArray.push(parseInt(item))
            }
        });
        return newArray;
    }
    function validateLetter(array){
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) === 'string'){
                return true;
            }
        }
        return false;
    }
    function validateNumber(array){
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) === 'number'){
                return true;
            }
        }
        return false;
    }
    function validateAge(content){
        if(content.length === 0){
            var element = document.getElementById("empty-age");
            ageInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese una edad');
        }
        else if (!validateInteger(content) || content < 18){
            var element = document.getElementById("error-age");
            ageInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('La edad debe ser un número mayor o igual a 18.');
        }
    }
    function validateInteger(age){
        if (age % 1 === 0){
            return true;
        }
        return false;
    }
    function validatePhone(content){
        if(content.length === 0){
            var element = document.getElementById("empty-phone");
            phoneInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese un teléfono');
        }
        else if (content.length < 7 || !validateInteger(content)){
            var element = document.getElementById("error-phone");
            phoneInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('El teléfono debe tener al menos 7 caracteres y no contener un espacio, guión ni paréntesis');
        }
    }
    function validateAddress(content){
        var array = content.split('');
        var arrayNumber = getArrayNumber(array);
        if(content.length === 0){
            var element = document.getElementById("empty-address");
            addressInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese una dirección');
        }
        else if (content.length < 5 || arrayNumber[0] === ' ' || !validateHasString(arrayNumber) || !validateHasSpace(arrayNumber) || !validateHasNumber(arrayNumber) || !validateOrderAddress(arrayNumber)){
            var element = document.getElementById("error-address");
            addressInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('La dirección debe tener al menos 5 caracteres y contener letras y números separadas por un espacio');
        }
    }
    function validateHasString(array){
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) === 'string'){
                return true;
            }
        }
        return false;
    }
    function validateHasSpace(array){
        for (let i = 0; i < array.length; i++) {
            if(array[i] === ' '){
                return true;
            }
        }
        return false;
    }
    function validateHasNumber(array){
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) === 'number'){
                return true;
            }
        }
        return false;
    }
    function validateOrderAddress(array){
        var indexLetter = null;
        var indexSpace = null;
        var indexNumber = null;
        var i = 0;
        do {
            if(typeof (array[i]) === 'string'){
                indexLetter = i;
            }
            else{
                i++;
            }
        } while (indexLetter === null);
        var j = 0;
        do {
            if(array[j] === ' '){
                indexSpace = j;
            }
            else{
                j++;
            }
        } while (indexSpace === null);
        var k = 0;
        do {
            if(typeof (array[k]) === 'number'){
                indexNumber = k;
            }
            else{
                k++;
            }
        } while (indexNumber === null);
        if (i < j && i < k && j < k){
            return true;
        }
        else{
            return false
        }
    }
    function validateCity(content){
        if(content.length === 0){
            var element = document.getElementById("empty-city");
            cityInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese una ciudad');
        }
        else if (content.length < 3){
            var element = document.getElementById("error-city");
            cityInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('La ciudad debe tener al menos 3 caracteres');
        }
    }
    function validateZipCode(content){
        if(content.length === 0){
            var element = document.getElementById("empty-zipCode");
            zipCodeInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese un código postal');
        }
        else if (content.length < 3){
            var element = document.getElementById("error-zipCode");
            zipCodeInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('El código postal debe tener al menos 3 caracteres');
        }
    }
    function validateIDCard(content){
        if(content.length === 0){
            var element = document.getElementById("empty-idCard");
            idCardInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('Ingrese un DNI');
        }
        else if (!validateInteger(content) || content.length < 7 || content.length > 8){
            var element = document.getElementById("error-idCard");
            idCardInput.classList.add('input-error');
            element.classList.remove('hide');
            errorList.push('El DNI debe ser un número entre 7 y 8 caracteres');
        }
    }
    function focusFullName (){
        if(fullNameInput.classList.contains('input-error')){
            fullNameInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-fullName");
        var element2 = document.getElementById("error-fullName");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusEmail (){
        if(emailInput.classList.contains('input-error')){
            emailInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-email");
        var element2 = document.getElementById("error-email");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusPassword (){
        if(passwordInput.classList.contains('input-error')){
            passwordInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-password");
        var element2 = document.getElementById("error-password");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusAge (){
        if(ageInput.classList.contains('input-error')){
            ageInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-age");
        var element2 = document.getElementById("error-age");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusPhone (){
        if(phoneInput.classList.contains('input-error')){
            phoneInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-phone");
        var element2 = document.getElementById("error-phone");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusAddress (){
        if(addressInput.classList.contains('input-error')){
            addressInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-address");
        var element2 = document.getElementById("error-address");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusCity (){
        if(cityInput.classList.contains('input-error')){
            cityInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-city");
        var element2 = document.getElementById("error-city");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusZipCode (){
        if(zipCodeInput.classList.contains('input-error')){
            zipCodeInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-zipCode");
        var element2 = document.getElementById("error-zipCode");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function focusIDCard (){
        if(idCardInput.classList.contains('input-error')){
            idCardInput.classList.remove('input-error')
        }
        var element1 = document.getElementById("empty-idCard");
        var element2 = document.getElementById("error-idCard");
        if(!element1.classList.contains('hide')){
            element1.classList.add('hide')
        }
        if(!element2.classList.contains('hide')){
            element2.classList.add('hide')
        }
    }
    function sendForm(){
        errorList = [];
        validateFullName(fullNameInput.value);
        validateEmail(emailInput.value);
        validatePassword(passwordInput.value);
        validateAge(ageInput.value);
        validatePhone(phoneInput.value);
        validateAddress(addressInput.value);
        validateCity(cityInput.value);
        validateZipCode(zipCodeInput.value);
        validateIDCard(idCardInput.value);
        if(errorList.length === 0){
            window.alert(`Nombre completo: ${fullNameInput.value}. Email: ${emailInput.value}. Contraseña: ${passwordInput.value}. Edad: ${ageInput.value}. Teléfono: ${phoneInput.value}. Dirección: ${addressInput.value}. Ciudad: ${cityInput.value}. Código postal: ${zipCodeInput.value}. DNI: ${idCardInput.value}`)
        }
        else{
            window.alert(errorList)
        }
    }
}
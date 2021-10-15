window.onload = function () {
    var fullNameInput = document.getElementById('input-fullName');
    fullNameInput.addEventListener('blur',validateFullName);
    var emailInput = document.getElementById('input-email');
    emailInput.addEventListener('blur',validateEmail);
    var passwordInput = document.getElementById('input-password');
    passwordInput.addEventListener('blur',validatePassword);
    var ageInput = document.getElementById('input-age');
    ageInput.addEventListener('blur',validateAge);
    var phoneInput = document.getElementById('input-phone');
    phoneInput.addEventListener('blur',validatePhone);
    var addressInput = document.getElementById('input-address');
    addressInput.addEventListener('blur',validateAddress);
    var cityInput = document.getElementById('input-city');
    cityInput.addEventListener('blur',validateCity);
    var zipCodeInput = document.getElementById('input-zipCode');
    zipCodeInput.addEventListener('blur',validateZipCode);
    var idCardInput = document.getElementById('input-idCard');
    idCardInput.addEventListener('blur',validateIDCard);

    function validateFullName(e){
        if(e.target.value.length === 0){
            var element = document.getElementById("empty-fullName");
            fullNameInput.classList.add('input-error');
            element.classList.remove('hide')
        }
        else if (e.target.value.length < 6 || e.target.value.indexOf(' ') === -1){
            var element = document.getElementById("error-fullName");
            fullNameInput.classList.add('input-error');
            element.classList.remove('hide')
        }
    }
    function validateEmail(e){
        var array = e.target.value.split('');
        var arrayNumber = getArrayNumber(array);
        console.log(arrayNumber)
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (validateHasSpace(arrayNumber)){
            console.log('No Puede tener espacios')
        }
        else if (!validateHasString(arrayNumber)){
            console.log('No tiene letras')
        }
        else if (!validateHasAt(arrayNumber)){
            console.log('No tiene @')
        }
        else if (!validateHasDot(arrayNumber)){
            console.log('No tiene .')
        }
        else if (validateOrderEmail(arrayNumber)){
            console.log('Mal formato')
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
    function validatePassword(e){
        var array = e.target.value.split('');
        var arrayPassword = getArrayNumber(array);
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (e.target.value.indexOf(' ') !== -1) {
            console.log('NO Puede contener espacios vacios')
        }
        else if (e.target.value.length < 8){
            console.log('MENOR A 8')

        }
        else if (!validateLetter(arrayPassword)){
            console.log('No tiene letra')
        }
        else if (!validateNumber(arrayPassword)){
            console.log('No tiene numero')
        }
        else{
            console.log('pasa')
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
    function validateAge(e){
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (!validateInteger(e.target.value)){
            console.log('No es integer')
        }
        else if (e.target.value < 18){
            console.log('Debe ser mayor a 18')
        }

    }
    function validateInteger(age){
        if (age % 1 === 0){
            return true;
        }
        return false;
    }
    function validatePhone(e){
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (e.target.value.length < 7){
            console.log('MENOR A 7')

        }
        else if (!validateInteger(e.target.value)){
            console.log('Debe ser un numero , no debe contener espacios ni guiones ni parentesis')
        }

    }
    function validateAddress(e){
        var array = e.target.value.split('');
        var arrayNumber = getArrayNumber(array);
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (e.target.value.length < 5){
            console.log('MENOR A 5')
        }
        else if (arrayNumber[0] === ' '){ 
            console.log('DEBE COMENZAR CON LETRAS')
        }
        else if (!validateHasString(arrayNumber)){ 
            console.log('DEBE CONTENER LETRAS')
        }
        else if (!validateHasSpace(arrayNumber)){
            console.log('DEBE TENER UN ESPACIO')
        }
        else if (!validateHasNumber(arrayNumber)){
            console.log('DEBE TENER UN NUMERO')
        }
        else if (!validateOrderAddress(arrayNumber)){
            console.log('DEBE ESTAR PRIMEROP LAS LETRAS , despues el espacio y ultimo NUMERO')
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
    function validateCity(e){
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (e.target.value.length < 3){
            console.log('MENOR A 3')

        }

    }
    function validateZipCode(e){
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (e.target.value.length < 3){
            console.log('MENOR A 3')

        }

    }
    function validateIDCard(e){
        if(e.target.value.length === 0){
            console.log('VACIO')
        }
        else if (!validateInteger(e.target.value)){
            console.log('No es integer')
        }
        else if (e.target.value.length < 7 || e.target.value.length > 8){
            console.log('Tiene que ser de 7 u 8 digitos')

        }

    }
}